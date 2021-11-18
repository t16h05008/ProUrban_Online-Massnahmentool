"use strict"

const iconSources = [
    "img/personalCost.png",
    "img/investmentCost.png",
    "img/time.png",
    "img/effects.png",
    "img/challenges.png"
]



let selectedActionIds = []

let grid;
let dpi;
let modal;
let toc = []; // table of contents
let switchingActions = { // indicates if another modal should be opened after the current one is closed
    "action": "",
    "status": false
}

let uniqueActorsFilterOptions = [];
let uniqueAreaFilterOptions = [];
let uniqueThemeFilterOptions = [];

const timeArray = ["kurzfristig", "kurz- bis mittelfristig", "mittelfristig", "mittel- bis langfristig", "langfristig"] // possible (partial) values for an actions time property
const areaArray = ["Grundstück/Immobilie", "Stadtteil/Quartier", "Gesamtstadt"] // possible (partial) values for an actions area property

const detailsTableOffsetX = 0.6; // in cm
const detailsTableOffsetY = 2.9; // in cm

function main() {
    initializeGrid();

    dpi = calculateScreenDpi();
    actions.forEach((action, idx) => {
        quantifyActionProperty(action, "cost");
        quantifyActionProperty(action, "time");
        quantifyActionProperty(action, "area");
    });

    // advanced filter
    initializeAdvancedFilter(actions);
    let advancedFilterWrapper = document.getElementById('advancedFilterWrapper');
    let btn = document.querySelector("#advancedFilterBtn");

    advancedFilterWrapper.addEventListener('shown.bs.collapse', function () {
        capAdvancedFilterColumnHeight(advancedFilterWrapper);
    });

    advancedFilterWrapper.addEventListener('show.bs.collapse', function () {
        btn.style.backgroundColor = "white";
        btn.style.color = "black"; 
    });

    advancedFilterWrapper.addEventListener('hide.bs.collapse', function () {
        btn.style.backgroundColor = "";
        btn.style.color = "white";
    });

    showAllActions();
    setTimeout(function(){
        grid.arrange()
    }, 500);

}


function initializeGrid() {
    let elem = document.querySelector('.grid');
    grid = new Isotope( elem, {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        fitRows: {
            gutter: 26
          }
    });

    grid.on( 'arrangeComplete', (itemsArr) => {
        let countEl = document.querySelector("#shownActionsCount");
        // only update if actions are displayed (not areas, actores, ...)
        // set to 0 if not or if no action is displayed
        if(itemsArr.length && itemsArr[0].element.id.startsWith("action"))
            countEl.innerText = itemsArr.length;
        else
            countEl.innerText = 0
    })
}


function createActionCards(actions, collapsed) {
    let result = [];
    for( let action of actions) {
        // get template
        let template = document.getElementById("actionCardTemplate");
        // clone and modify template
        let element = template.cloneNode(true);
        element.style.display = "block";
        element.id = "actionCard" + action.id;
        element.dataset.actionid = action.id;

        let titleBtn = element.querySelector("h5 button");
        titleBtn.dataset.bsTarget = "#actionCardBody" + action.id;
        titleBtn.setAttribute("aria-controls", "actionCardBody" + action.id);
        titleBtn.innerHTML = action.title;

        let titleImg = element.querySelector("h5 img");
        titleImg.dataset.bsTarget = "#actionCardBody" + action.id;
        titleImg.setAttribute("aria-controls", "actionCardBody" + action.id);
        titleImg.src = action.image;

        let cardBody = element.querySelector(".actionCardBody");
        cardBody.id = "actionCardBody" + action.id;
        if( !collapsed )
            cardBody.classList.add("show");
        
        element.querySelector(".card-problem").innerHTML = "<b>Ausgangsproblem:</b>" + action.problem;
        element.querySelector(".card-solution").innerHTML = "<b>Maßnahme:</b>" + action.solution;
        element.querySelector(".card-effects").innerHTML = "<b>Wirkung:</b>" + action.effects;

        let selectActionBtn = element.querySelector(".selectActionBtn");
        selectActionBtn.dataset.actionid = action.id
        let actionIdStr = action.id.toString();
        if( selectedActionIds.includes(actionIdStr) ) {
            selectActionBtn.classList.remove("btn-primary")
            selectActionBtn.classList.add("btn-success");
            selectActionBtn.innerHTML = "Maßnahme ausgew&auml;hlt <i class=\"bi bi-check-circle\"></i>"
        }

        let actionDetailsBtn = element.querySelector(".actionDetailsBtn")
        actionDetailsBtn.dataset.actionid = action.id
        
        result.push(element);
    }

    return result;
}


function createAreaCards(areas) {
    let result = [];
    for( let area of areas) {
        // get template
        let template = document.getElementById("areaCardTemplate");
        // clone and modify template
        let element = template.cloneNode(true);
        element.removeAttribute("id");
        element.style.display = "block";
        let title = element.querySelector(".card-title")
        title.innerHTML = area.title;
        let desc = element.querySelector(".card-text")
        desc.innerHTML = area.description;
        let btn = element.getElementsByTagName("button")[0];
        btn.addEventListener("click", function(e) {
            filterActions("area", title.innerHTML);
        });

        result.push(element);
    }

    return result;
}

function createActorCards(actors) {
    let result = [];
    for( let actor of actors) {
        // get template
        let template = document.getElementById("actorCardTemplate");
        // clone and modify template
        let element = template.cloneNode(true);
        element.removeAttribute("id");
        element.style.display = "block";
        let title = element.querySelector(".card-title")
        title.innerHTML = actor.title;
        let desc = element.querySelector(".card-text")
        desc.innerHTML = actor.description;
        let btn = element.getElementsByTagName("button")[0];
        btn.addEventListener("click", function() {
            filterActions("actors", title.innerHTML)
        });

        result.push(element);
    }

    return result;
}


function createThemeCards(themes) {
    let result = [];
    for( let theme of themes) {
        // get template
        let template = document.getElementById("themeCardTemplate");
        // clone and modify template
        let element = template.cloneNode(true);
        element.removeAttribute("id");
        element.style.display = "block";
        let title = element.querySelector(".card-title")
        title.innerHTML = theme.title;
        let desc = element.querySelector(".card-text")
        desc.innerHTML = theme.description;
        let btn = element.getElementsByTagName("button")[0];
        btn.addEventListener("click", function() {
            filterActions("theme", title.innerHTML)
        });
        result.push(element);
    }

    return result;
}

function insertCards(cards, grid) {
    for(let card of cards) {
        grid.insert( card )
    }

    let cardBodies = document.querySelectorAll(".actionCardBody");
    for (let el of cardBodies) {
        "shown.bs.collapse hidden.bs.collapse".split(" ").forEach(function(e){
            el.addEventListener(e,function() {
                grid.arrange();
            }, false);
        });
    }

   
}


function filterActions(filterProperty, filterValue) {

    let filterResult = actions.slice(0)

    filterResult = filterResult.filter( obj => {

        // remove html tags
        let str = removeHtmlTags(obj[filterProperty])
        // split string
        let split = str.split(",");
        split = split.map( el => el.trim());

        // check if action meets our filter criteria
        let result = split.some( (el) => {
            return el === filterValue
        });
        return result;
    });

    clearItems();
    let cards = createActionCards(filterResult);
    insertCards(cards, grid);
}


/**
 * We need to use sliderValue as a paremeter because the filter function is called during a slide (mouse still clicked).
 * If we get the slider value from inside the function, we would get the value from before the slide
 * @param {boolean} usedSliderId | id of the used slider, optional
 * @param {float[]} sliderValue | current value of the used slider, optional
 */
function filterActionsAdvanced(usedSliderId, sliderValue) {
    
    let filterResult = actions.slice(0);
    // get all filter criteria
    let filterCriteria = {};
    let chb_categories = ["actors", "area", "theme"];
    for(let i=0;i<chb_categories.length;i++) {
        let category = chb_categories[i];
        let chbs = document.querySelectorAll("#advancedFilter" + capitalizeFirstLetter(category) + "List li input:checked");
        let chbsArr = Array.from(chbs);
        let values = chbsArr.map (obj => {
            // exclude the number form the filter citeria
            return obj.value.split(" [")[0];
        });
        filterCriteria[category] = values;
    }


    
    let slider_categories = [];
    let rangeSliders = document.querySelectorAll("#advancedFilterCol4 .filterSlider, #advancedFilterCol5 .filterSlider");
    // get slider categories and values
    rangeSliders.forEach( slider => {
        let category = slider.id.replace("-slider", "");
        slider_categories.push(category);

        if(usedSliderId && usedSliderId.split("-")[0] === category) {
            filterCriteria[category] = sliderValue; // the updated value of the used slider
        } else {
            // get values for all other sliders
            filterCriteria[category] = $(slider).slider("option", "values");
        }
    });

    // now filter actions for each prop by filterCriteria
    for(let filterProp in filterCriteria) {
        if(chb_categories.includes(filterProp)) {
            filterResult = filterResult.filter( obj => {
                if(filterCriteria[filterProp].length === 0)
                    return true;
                // remove html tags
                let str = removeHtmlTags(obj[filterProp])
                // split string
                let split = str.split(",");
                split = split.map( el => el.trim());
                // check if action meets our filter criteria
                let result = filterCriteria[filterProp].some( (el) => {
                    return split.includes(el)
                });
                return result;
            });
        }
        
        if(slider_categories.includes(filterProp)) {
            filterResult = filterResult.filter( obj => {
                if(filterCriteria[filterProp].length === 0) // should not happen since we filtered categories before
                    return true;
                

                // TODO what to do with undefined and 0 ?
                // Include them in the range?
                return typeof(obj.iconsValuation[filterProp]) === 'undefined' ||
                    (obj.iconsValuation[filterProp] === 0 ||
                    obj.iconsValuation[filterProp] >= filterCriteria[filterProp][0]) &&
                    obj.iconsValuation[filterProp] <= filterCriteria[filterProp][1];
            });
        }

    }

    clearItems();
    let cards = createActionCards(filterResult);
    insertCards(cards, grid);
}


function showAllActions(event) {
    clearItems();
    resetFilter();
    let cards = createActionCards(actions, true)
    insertCards(cards, grid);
}

function showAllAreas(event) {
    highlightButton(event.target);
    clearItems();
    resetFilter();
    let cards = createAreaCards(areas);
    insertCards(cards, grid)
}

function showAllActors(event) {
    highlightButton(event.target);
    clearItems();
    resetFilter();
    let cards = createActorCards(actors);
    insertCards(cards, grid)
}

function showAllThemes(event) {
    highlightButton(event.target);
    clearItems();
    resetFilter();
    let cards = createThemeCards(themes)
    insertCards(cards, grid)
}

function clearItems() {
    var elems = grid.getItemElements()
    grid.remove(elems);
}

function resetFilter() {
    grid.arrange( {filter: () => { return true;}} );
    // uncheck advanced filter checkboxes
    // sliders can stay where they are
    let chbs = document.querySelectorAll(".advancedFilterCol ul li input:checked")
    chbs.forEach( chb => {
        chb.checked = false;
    });
}


function highlightButton(btn) {
    let btns = document.querySelectorAll(".topRowBtnHighlight");
    for(let b of btns) {
        b.style.backgroundColor = "";
        b.style.color = "white"; 
    }
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
}

function showSelectedActions() {
    clearItems();
    resetFilter();
    let selectedActions = getActionsByIds(selectedActionIds);
    let cards = createActionCards(selectedActions, false)
    insertCards(cards, grid);
}

function getActionsByIds(ids) {
    if(Array.isArray(ids)) {
        ids = ids.map( (id) => { return parseInt(id) });
        return actions.filter( (action) => {
            return ids.includes(action.id);
        });
    } else {
        ids = parseInt(ids);
        return actions.filter( (action) => {
            return ids === action.id;
        });
    }
    
    
}


function toggleActionSelection(event) {
    let element = event.target
    let cardElement = document.getElementById("actionCard" + element.dataset.actionid)
    let actionId = cardElement.dataset.actionid;
    let createPdfBtn = document.getElementById("createPdfBtn")

    if(element.classList.contains('btn-primary')) {
        element.classList.remove("btn-primary");
        element.classList.add("btn-success");
        element.innerHTML = "Maßnahme ausgew&auml;hlt <i class=\"bi bi-check-circle\"></i>";
        
        if( !selectedActionIds.includes(actionId) ) {
            selectedActionIds.push(actionId);
            createPdfBtn.disabled = false;
        }
            
    } else {
        element.classList.remove("btn-success");
        element.classList.add("btn-primary");
        element.innerHTML = "Maßnahme auswählen";

        if( selectedActionIds.includes(actionId) ) {
            let index = selectedActionIds.indexOf(actionId);
            if(index > -1)
                selectedActionIds.splice(index, 1);
            if(selectedActionIds.length === 0)
                createPdfBtn.disabled = true;
        } 
    }
    // update count
    document.querySelector("#selectedActionsCount").innerText = selectedActionIds.length;
}


function updateDetailsTable(action) {

    let description = document.getElementsByClassName("actionDetailsModalDescription")[0];
    let targetgroups = document.getElementsByClassName("actionDetailsModalTargetgroups")[0];
    let actors = document.getElementsByClassName("actionDetailsModalActors")[0];
    let effects = document.getElementsByClassName("actionDetailsModalEffects")[0];
    let problem = document.getElementsByClassName("actionDetailsModalProblem")[0];
    let challenges = document.getElementsByClassName("actionDetailsModalChallenges")[0];
    let solution = document.getElementsByClassName("actionDetailsModalSolution")[0];
    let interactions = document.getElementsByClassName("actionDetailsModalInteractions")[0];
    let examples = document.getElementsByClassName("actionDetailsModalExamples")[0];
    let iconContainers = document.querySelectorAll(".valuationTable tr td:last-child");

    description.innerHTML = action.description;
    targetgroups.innerHTML = action.targetgroups;
    actors.innerHTML = action.actors;
    effects.innerHTML = action.effects;
    problem.innerHTML = action.problem;
    challenges.innerHTML = action.challenges;
    solution.innerHTML = action.solution;

    interactions.innerHTML = action.interactions;
    // add onclick events to each interations list element
    // to link to a different action
    let elements = interactions.querySelectorAll("li");
    for(let interaction of elements) {
        let title = interaction.innerText.trim();
        for(let action of actions) {
            if(action.title === title) {
                interaction.style.color = "#7f1b3f";
                interaction.style.textDecoration = "underline";
                interaction.style.cursor = "pointer";
                interaction.addEventListener("mouseenter", function() {
                    interaction.style.color="#54122a"
                })
                interaction.addEventListener("mouseleave", function() {
                    interaction.style.color="#7f1b3f"
                })
                interaction.addEventListener("click", function() {
                    switchingActions = {
                        "action": action,
                        "status": true
                    };
                    modal.hide();
                    
                });
            }
        }
    }
    examples.innerHTML = action.examples;
    iconContainers.forEach(function(element) {
        element.innerHTML = "";
    });

    for(let i=0; i<iconSources.length; i++) {
        // get the icon name from the path   img/personalCost.png
        let srcPath = iconSources[i]
        let iconName = srcPath.slice(srcPath.indexOf("/")+1, srcPath.indexOf("."));

        for(let j=1; j<=3;j++) { // three icons per row
            let imgElement = document.createElement("img");
            let status = "";
            if(j <= action.iconsValuation[iconName]) {
                status = "-highlighted";
            } else if (j-0.5 <= action.iconsValuation[iconName]) {
                status = "-half-highlighted";
            }
            srcPath = srcPath.slice(0, -4) + status + srcPath.slice(-4);  
            imgElement.src = srcPath;
            imgElement.classList.add("icon");
            imgElement.classList.add("me-2");
            iconContainers[i].appendChild(imgElement);
            srcPath = iconSources[i] // reset srcPath because we defined it outside of the loop
        }
    }

    // the last icon has a different path schema (file names) and needs to be be done separately
    let names = ["img/grundstueck.png", "img/stadtteil.png", "img/stadt.png"];
    for(let i=0;i<names.length;i++) {
        let imgElement = document.createElement("img");
        let srcPath = names[i];
        let status = "";
        if(i <= action.iconsValuation["area"]) {
            status = "-highlighted";
        } else if (i-0.5 <= action.iconsValuation["area"]) {
            status = "-half-highlighted";
        }
        srcPath = srcPath.slice(0, -4) + status + srcPath.slice(-4);  
        imgElement.src = srcPath;
        imgElement.classList.add("icon");
        imgElement.classList.add("me-2");
        iconContainers[iconContainers.length-1].appendChild(imgElement)
    }
}

/**
 * wrapper function that gets corresponding action,
 * then calls openDetailsModal
 * @param {} event 
 */
function showDetails(event) {
    let element = event.target;
    let id = element.dataset.actionid;
    let action = getActionsByIds(id)[0];
    openDetailsModal(action);
}


function openDetailsModal(action) {

    
    let modalElement = document.getElementById("actionDetailsModal");
    let number = document.getElementById("actionDetailsModalNumber");
    let title = document.getElementById("actionDetailsModalTitle");
    number.innerHTML = action.number;
    title.innerHTML = "<b>" + action.title + "</b>";

    updateDetailsTable(action);
    modal = new bootstrap.Modal(modalElement, {
        keyboard: false
    });
    modalElement.addEventListener("hidden.bs.modal", function(event) {
        if(switchingActions.status) {
            openDetailsModal(switchingActions.action);
            switchingActions.status = false;
        }
    });

    modal.show()
}


async function createPDF() {
    // show loading overlay
    const loadingOverlayConfig = {
        "overlayBackgroundColor": "#000000",
        "overlayOpacity": "0.3",
        "spinnerIcon": "ball-clip-rotate",
        "spinnerColor": "#FFF7F7",
        "spinnerSize": "1x",
        "overlayIDName": "loading-overlay",
        "spinnerIDName": "loading-overlay-spinner",
        "offsetX": 0,
        "offsetY": 0,
        "containerID": "actionWrapper",
        "lockScroll": false,
        "overlayZIndex": 9998,
        "spinnerZIndex": 9999
    };
    JsLoadingOverlay.show(loadingOverlayConfig);

    window.html2canvas = html2canvas;
    // cover page
    const doc = new jspdf.jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4"
    });

    
    let actions = getActionsByIds(selectedActionIds);
    // sort actions by number
    actions.sort( (a, b) => a.number - b.number)
    // for each action
    for(let i=0; i<actions.length; i++) {
        let action = actions[i];
        let idx = i;

        doc.addPage("a4", "landscape");
        doc.setFont("Helvetica", "normal");
        doc.setTextColor("#000000");

        setupStaticPdfPageElements(doc, action);
        toc.push({
            action: action,
            pageNr: doc.internal.getCurrentPageInfo().pageNumber - 1 // ignore cover page
        });


        // Since we have one pdf to work on we will do everything syncronous.
        // Async functions have shown to cause problems, since we print to the wrong page, have wrong colors set, etc.   
        updateDetailsTable(action) // set content for details table to the current action

        let detailsTable = document.querySelector(".detailsTable");
        
        let links = [] // stores the bounding rectangles where links would be inserted, so that this can be done manually later
        let canvasScale = 2 // the higher the scale the better quality we get but it increases processing time

        // create a copy of the dom node outside of viewport, convert it to a canvas and screenshot it
        // html2canvas does not work properly with bootstrap modals.
        // so we copy our table to the main page, take the screenthot and delete the clone
        let duplicateDetailsTable = detailsTable.cloneNode(true);
        document.body.appendChild(duplicateDetailsTable)
        duplicateDetailsTable.style.position = 'absolute';
        duplicateDetailsTable.style.left = -20000 - (1000 * idx) + "px"; // -20000, -21000, -22000, ...
        duplicateDetailsTable.style.top = '0px';
        duplicateDetailsTable.style.margin = '0px'; // remove all margins
        duplicateDetailsTable.style.width = "19.1cm"
        // explicitly set the margin bottom for all paragraphs
        // so we know the exact value later and it is the same across all browsers.
        duplicateDetailsTable.querySelectorAll("p").forEach( (el) => {
            el.style.marginBottom = "16px"
        })

       
        let elements = duplicateDetailsTable.querySelectorAll("tr td:last-child");
        // we have to define our styling here and not in the onclone method.
        // it has to be the same. If we differ our styling in the onclone method our layout will not fit...
        elements.forEach(function(element) {
            element.style.textAlign = "justify";
            element.style.fontSize = "10pt";

            // get position of links and store them for later
            let aTags = element.querySelectorAll(".actionDetailsModalExamples a");
            if(aTags.length > 0) {

                let arr = Array.from(aTags).map( (el) => {
                    // only return links that are in the examples row since we don't want to link between actions
                    console.log(el.parentElement.parentElement);
                    let rect = el.getBoundingClientRect();
                    // define an object to store the links information
                    return {
                        "text": el.innerText,
                        "url": el.href,
                        "position": {
                            // getBoundingClientRect is relative to the current viewport position. To get the absolute coordinates from
                            // the top left corner we have to add the offset, that was subtracted by getBoundingClientRect (if there is any).
                            "left": rect.left + window.scrollX, 
                            "top": rect.top + window.scrollY,
                            "width": rect.width,
                            "height": rect.height
                        }
                    }
                });

                links.push( ...arr ) // append all links for current row to links array
            }

            let noLinks = element.querySelectorAll(".actionDetailsModalInteractions li");
            noLinks.forEach( (el) => {
                el.style.textDecoration = "none";
                el.style.color = "#000000";
            })
        });

        elements = duplicateDetailsTable.querySelectorAll("tr");
        let sum = 0;
        console.log(duplicateDetailsTable.getBoundingClientRect().height);
        for (let [index, element] of elements.entries()) {
            console.log("row " + index + ": y = " + sum);
            console.log("rowPT " + index + ": y = " + pxToPt(sum));
            sum += element.getBoundingClientRect().height;
        }

        // now screenshot the duplicate
        let canvas = await html2canvas(duplicateDetailsTable, {
            removeContainer: false,
            logging: false,
            scale: canvasScale,
            onclone: function(clonedDoc, element) {
            }
        });

        try {
            // check if whole image fits on first page
            let availablePageHeightPt = cmToPt(19.7 - detailsTableOffsetY); // 19.7 is the height we want to use for the detailstable


            let availablePageHeightPx = ptToPx(availablePageHeightPt);
            let canvasHeightPt = pxToPt(canvas.height / canvasScale);

            let totalCanvasHeightUsedPt = pxToPt(0); // used height across all pages, must match the canvas height in the end
            let usedPageHeightPt = pxToPt(0);  // used height on current page
            let rowHeightSumOfPrevPagesPt = 0;  // needed to place links, it is different from totalCanvasHeightUsedPt
            // get rows
            let rows = duplicateDetailsTable.querySelectorAll("tr")
            
            console.log("availablePageHeightPx", availablePageHeightPx);
            console.log("availablePageHeightPt: ", availablePageHeightPt);
            console.log("canvas height: ", canvasHeightPt);
            
            // if it does we just add it
            if(availablePageHeightPt >= canvasHeightPt) {
                console.log("canvas fits on page");
               
                doc.addImage(
                    canvas,
                    "png",
                    cmToPt(detailsTableOffsetX),
                    cmToPt(detailsTableOffsetY),
                    pxToPt(canvas.width / canvasScale),
                    pxToPt(canvas.height / canvasScale),
                    "",
                    "SLOW",
                    0
                )

                // make links clickable
                makePdfLinksInteractive(links, doc, idx, detailsTableOffsetX, detailsTableOffsetY)

            } else {
                // If not we need to split the canvas in multiple parts.
                // We iterate the table rows and check for each one if it fits on the page
                // As soon as we reach the one that exceeds the available height we split the canvas,
                // insert the first part and jump to the next page where we repeat the process until
                // the complete canvas is inserted.
                // If there are multple paragraphs in a table row we try to plit in between paragraphs
                // if the whole row doesn't fit on current page

                // iterate rows
                for(let j=0; j<rows.length; j++) {
                    let row = rows[j];

                    console.log("looking at row: " + j);
                    console.log("inner html: ", row.innerHTML);

                    // get height of current row
                    // we don't need to adjust the viewport scroll here since we only need the height, not the absolute position
                    let currentRowHeight = row.getBoundingClientRect().height; 

                    // and add it to sum
                    let usedPageHeightPlusRowPt = usedPageHeightPt + pxToPt(currentRowHeight)
                    console.log("usedPageHeightPlusRowPt is:", usedPageHeightPlusRowPt);
                    
                    // check if row would fit on page
                    if(usedPageHeightPlusRowPt < availablePageHeightPt) {
                        console.log("row " + j + " fits on page");
                        console.log("usedPageHeightPlusRowPt: ", usedPageHeightPlusRowPt, " availablePageHeightPt: ", availablePageHeightPt);
                        usedPageHeightPt = usedPageHeightPlusRowPt; // update used page height since row does fit
                        
                        // if we reached the last row we have to print the remaining rows
                        if( j == rows.length - 1 ) {
                            console.log("last row reached");
                            // we can use availablePageHeightPt instead of usedPageHeightPt here, because we want to print the whole page height
                            let sx =  0;
                            let sy = ptToPx(totalCanvasHeightUsedPt);
                            let sWidth = canvas.width;
                            let sHeight = ptToPx(availablePageHeightPt)
                            let dx = 0;
                            let dy = 0;
                            let dWidth = canvas.width;
                            let dHeight = ptToPx(availablePageHeightPt);

                            // no need to use the method result since we are done at this point
                            printPartialCanvas(canvas, doc, canvasScale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, detailsTableOffsetX, detailsTableOffsetY);

                            // then make links clickable
                            makePdfLinksInteractive(links, doc, idx, detailsTableOffsetX, detailsTableOffsetY, rowHeightSumOfPrevPagesPt)
                        }
    
                    } else {
                        console.log("row " + j + " doesn't fit on page");

                        // iterate paragraphs and see how many still fit on page
                        let paragraphs = duplicateDetailsTable.querySelectorAll("tr:nth-child(" + j+1 + ") td:last-child p");
                        console.log(paragraphs);
                        
                        if(paragraphs && paragraphs.length > 1) {

                            for(let k=0; k<paragraphs.length; k++) {
                                let paragraph = paragraphs[k];
                                // get height of current paragraph
                                let paragraphMarginBot = parseInt(paragraph.style.marginBottom.replace("px", ""))
                                let currentParagraphHeight = paragraph.getBoundingClientRect().height + paragraphMarginBot;
                                console.log("current paragraph height px: ",  currentParagraphHeight);
                                console.log("current paragraph height pt: ",  pxToPt(currentParagraphHeight));
                                // and add it to the sum
                                let usedPageHeightPlusParagraphPt = usedPageHeightPt + pxToPt(currentParagraphHeight) 
                                
                                if(usedPageHeightPlusParagraphPt < availablePageHeightPt) {
                                    console.log("paragraph fits on page");
                                    console.log("usedPageHeightPlusParagraphPt: ", usedPageHeightPlusParagraphPt, " availablePageHeightPt: ", availablePageHeightPt);
                                    usedPageHeightPt = usedPageHeightPlusParagraphPt; // update used page height since paragraph does fit on page
                                } else {
                                    // paragraph doesn't fit on page
                                    console.log("paragraph doesn't fit on page");
                                    console.log(usedPageHeightPt);
                                    console.log("usedPageHeightPlusParagraphPt: ", usedPageHeightPlusParagraphPt, " availablePageHeightPt: ", availablePageHeightPt);
                                    console.log("usedPageHeightPlusParagraphPx: ", ptToPx(usedPageHeightPlusParagraphPt), " availablePageHeightPx: ", ptToPx(availablePageHeightPt));
                                    
                                    let sx =  0;
                                    let sy = ptToPx(totalCanvasHeightUsedPt);
                                    let sWidth = canvas.width;
                                    let sHeight = ptToPx(usedPageHeightPt)
                                    let dx = 0;
                                    let dy = 0;
                                    let dWidth = canvas.width;
                                    let dHeight = ptToPx(usedPageHeightPt);
            
                                    let partialCanvas = printPartialCanvas(canvas, doc, canvasScale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, detailsTableOffsetX, detailsTableOffsetY);
                                    totalCanvasHeightUsedPt += pxToPt(partialCanvas.height); // update used total height so that the next canvas continues at this point
                                    console.log("printed canvas with height: ", partialCanvas.height, ". totalCanvasHeightUsedPt in pixel is: ", ptToPx(totalCanvasHeightUsedPt));
                                    rowHeightSumOfPrevPagesPt += usedPageHeightPt;
                                    console.log("rowHeightSumOfPrevPagesPt: ", rowHeightSumOfPrevPagesPt);
                                    // then switch to next page and reset used height
                                    doc.addPage("a4", "landscape");
                                    setupStaticPdfPageElements(doc, action);
                                    // put paragraph that didn't fit on last page on this page
                                    usedPageHeightPt = pxToPt(currentParagraphHeight);

                                    // the case that there are multiple paragraphs in the last row can't occur since last row are the examples, which is a <ul>
                                }
                            }
                        } else {
                            // we have no or only one paragraph
                            // print part of the canvas without the row that didn't fit
                            let sx =  0;
                            let sy = ptToPx(totalCanvasHeightUsedPt); // the y coordinate from where we want to start the canvas
                            let sWidth = canvas.width; // same width as whole canvas
                            let sHeight = ptToPx(usedPageHeightPt); // usedPageHeight is the sum of row heights (without the one that doesn't fit)
                            let dx = 0;
                            let dy = 0;
                            let dWidth = canvas.width;
                            let dHeight = ptToPx(usedPageHeightPt);

                            // print partial canvas
                            let partialCanvas = printPartialCanvas(canvas, doc, canvasScale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, detailsTableOffsetX, detailsTableOffsetY);

                            totalCanvasHeightUsedPt += pxToPt(partialCanvas.height); // update used total height so that the next canvas continues at this point
                            console.log("printed canvas with height: ", partialCanvas.height, ". totalCanvasHeightUsedPt in pixel is: ", ptToPx(totalCanvasHeightUsedPt));
                            rowHeightSumOfPrevPagesPt += usedPageHeightPt
                            console.log("rowHeightSumOfPrevPagesPt: ", rowHeightSumOfPrevPagesPt);
                            // add new page
                            doc.addPage("a4", "landscape");
                            setupStaticPdfPageElements(doc, action);

                            // put row that didn't fit on last page on new page
                            usedPageHeightPt = pxToPt(currentRowHeight);
                            
                            // the row that didn't fit might also be the last one.
                            // in that case we need to print it here since the iteration will end here
                            if( j == rows.length - 1 ) {
                                console.log("last row reached. It didn't fit on last page.");
                                // we can use availablePageHeightPt instead of usedPageHeightPt here, because we want to print the whole page height
                                let sx =  0;
                                let sy = ptToPx(totalCanvasHeightUsedPt);
                                let sWidth = canvas.width;
                                let sHeight = ptToPx(availablePageHeightPt)
                                let dx = 0;
                                let dy = 0;
                                let dWidth = canvas.width;
                                let dHeight = ptToPx(availablePageHeightPt)
                                // no need to use the method result since we are done at this point
                                printPartialCanvas(canvas, doc, canvasScale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, detailsTableOffsetX, detailsTableOffsetY);
                                // then make links clickable
                                makePdfLinksInteractive(links, doc, idx, detailsTableOffsetX, detailsTableOffsetY, rowHeightSumOfPrevPagesPt)
                            }
                        }
                    }
                }
            }
           
            // if this was the last action
            if(idx == selectedActionIds.length-1) {
                setupCoverPage(doc, toc)
                doc.save("pdf.pdf")
                //window.open(doc.output('bloburl')); // save
                // hide loading overlay
                showPDFExportResultOverlay("success");
                
            }
        } catch (e) {
            console.error("Beim export des PDF ist ein Fehler aufgetreten:");
            console.error(e);
            showPDFExportResultOverlay("error");
        }
    }
}


function setupCoverPage(doc, toc) {
    doc.setPage(1);
    doc.setTextColor("#000000");
    let image = new Image();
    image.src = "img/cover_background.jpg"
    doc.addImage(
        image,
        "png",
        cmToPt(0),
        cmToPt(0),
        cmToPt(21),
        cmToPt(21 / 3),
        "",
        "SLOW",
        0
    );

    image.src = "img/urbaneproduktion.ruhr-logo-brombeer.png";
    doc.addImage(
        image,
        "png",
        cmToPt(0.1),
        cmToPt(0.1),
        cmToPt(9),
        cmToPt(9 / 3.430),
        "",
        "SLOW",
        0
    );
    
    // title
    doc.setFont("BebasNeue-Regular", "normal");
    doc.setFontSize(36);
    doc.text('Maßnahmenauswahl\nzur\nUrbanen Produktion', cmToPt(10.5), cmToPt(8.5), {
        align: 'center'
    });

    // bottom logos
    addCoverPageBottomLogo(doc)

    // toc
    doc.setFontSize(24);
    doc.text("Inhalt", cmToPt(1.5), cmToPt(13));
    doc.setFontSize(14);
    let tocStartY = cmToPt(14.2);
    let tocBreakpointY = cmToPt(26)
    let dy = cmToPt(1);
    let linesOnFirstPage = 0
    let secondPageAdded = false; // tracks of we already added the second toc page
    for(let i=0; i<toc.length; i++) {
        let tocEntry = toc[i];
        let yPos = tocStartY + i * dy;

        if(yPos < tocBreakpointY) {
            // we don't know it there will be one or two toc pages so we can't add links yet.
            // this is why we don't add anything to the doc here and do that leter in a second iteration.
            linesOnFirstPage += 1;
        } else {
            // if it is the first tocEntry that doesn't fit on first page
            // setup new cover sheet and reset yPosition
            if( !secondPageAdded) {
                setupAdditionalTocPage(doc);
                secondPageAdded = true;
            }
            // use different variable names here to not override the outer scope ones.
            let tocStartOnSecondPage = cmToPt(3.2);
            let yPosSecondPage = tocStartOnSecondPage + (i-linesOnFirstPage) * dy;
            
            doc.textWithLink(tocEntry.action.number, cmToPt(1.5), yPosSecondPage, { pageNumber: tocEntry.pageNr+2 } ); // number
            doc.textWithLink(tocEntry.action.title, cmToPt(2.5), yPosSecondPage, {
                maxWidth: cmToPt(15),
                pageNumber: tocEntry.pageNr+2
            }); // title
            doc.textWithLink(tocEntry.pageNr.toString(), cmToPt(19), yPosSecondPage, {
                align: 'right',
                pageNumber: tocEntry.pageNr+2
            }); // page number
        }
    }

    // now that the toc is added we need to iterate first page again to add the link overlays
    // this was not possible before, because it was unclear if there are one or two toc pages at iteration time
    doc.setPage(1);
    for(let i=0; i<toc.length; i++) {
        let tocEntry = toc[i];
        let yPos = tocStartY + i * dy;
        
        if(yPos < tocBreakpointY) {
            // add a different number to the page number depending on how many toc pages there are
            if(secondPageAdded) {
                doc.textWithLink(tocEntry.action.number, cmToPt(1.5), yPos, { pageNumber: tocEntry.pageNr+2 }); // number
                doc.textWithLink(tocEntry.action.title, cmToPt(2.5), yPos, {
                        maxWidth: cmToPt(15),
                        pageNumber: tocEntry.pageNr+2
                }); // title
                doc.textWithLink(tocEntry.pageNr.toString(), cmToPt(19), yPos, {
                        align: 'right',
                        pageNumber: tocEntry.pageNr+2
                }); // page number
            } else {
                doc.textWithLink(tocEntry.action.number, cmToPt(1.5), yPos, { pageNumber: tocEntry.pageNr+1 }); // number
                doc.textWithLink(tocEntry.action.title, cmToPt(2.5), yPos, {
                        maxWidth: cmToPt(15),
                        pageNumber: tocEntry.pageNr+1
                }); // title
                doc.textWithLink(tocEntry.pageNr.toString(), cmToPt(19), yPos, {
                        align: 'right',
                        pageNumber: tocEntry.pageNr+1
                }); // page number
            }
        }     
    }
    
}


/**
 * adds logos as image on the bottom of current page of the jspdf parameter (doc)
 * @param {object} doc | jspdf document
 */
function addCoverPageBottomLogo(doc) {
    let image = new Image();
    image.src = "img/logos_cover.png"
    doc.addImage(
        image,
        "png",
        cmToPt(0),
        cmToPt(26),
        cmToPt(21),
        cmToPt(21 / 6.411),
        "",
        "SLOW",
        0
    )
}

function setupAdditionalTocPage(doc) {
    doc.addPage("a4", "portrait");
    console.log(doc.internal);
    doc.movePage(doc.internal.getNumberOfPages(), 2);

    doc.setFontSize(24);
    doc.text("Inhalt (Forts.)", cmToPt(1.5), cmToPt(2));
    doc.setFontSize(14);
    addCoverPageBottomLogo(doc);
}

function setupStaticPdfPageElements(doc, action) {
    doc.setLineWidth(cmToPt(0.07));
    doc.setDrawColor("#333333");
    let text; // we use this variable multiple time to store text from the modal

    doc.rect(cmToPt(0.3), cmToPt(0.3), cmToPt(29.1), cmToPt(20.4)); // outer line
    doc.setFillColor("#006059") //green
    doc.rect(cmToPt(0.3), cmToPt(0.3), cmToPt(29.1), cmToPt(2), "F"); // top rect
    doc.setLineWidth(cmToPt(0.05));
    doc.line(cmToPt(20), cmToPt(detailsTableOffsetY), cmToPt(20), cmToPt(19.7)) // vertical line
    doc.line(cmToPt(1), cmToPt(20), cmToPt(28.7), cmToPt(20)) // bottom line
    
    // logo in top left corner
    let logo = new Image()
    logo.src = "img/logo.png"
    doc.addImage(logo, 'png', cmToPt(1), cmToPt(0.4), cmToPt(1.6), cmToPt(1.8))

    // action number
    doc.setFontSize(11);
    doc.setTextColor("#ffffff");
    doc.text(action.number, cmToPt(1.8), cmToPt(1.3), {
        align: 'center',
        baseline: 'middle'
    });

    // title
    doc.setFontSize(24)
    doc.setFont("BebasNeue-Regular", "normal")
    doc.text(action.title, cmToPt(14.7), cmToPt(1.3), {
        align: 'center',
        baseline: 'middle'
    });

    // right side heading
    doc.setFontSize(20)
    doc.setFont("Helvetica", "normal")
    doc.setTextColor("#000000")
    text = document.querySelector("#valuationHeading").innerHTML
    doc.text(text, cmToPt(24.5), cmToPt(3.6), {
        align: 'center',
        baseline: 'middle'
   });

   // right side labels
   doc.setFontSize(12);
   let elements = document.querySelectorAll(".valuationTable tr td:first-child");
   let posY = [cmToPt(5.5), cmToPt(7.3), cmToPt(9.2), cmToPt(11.2), cmToPt(13), cmToPt(15.2)]
   for(let i=0;i<elements.length;i++) {
        text = elements[i].innerHTML;
        if(i>=4) { // for the last two
            text = text.replace(" ", "\n")
        }
        doc.text(text, cmToPt(21), posY[i]);
    }

    // icons
    // icon positions
    let posX = [cmToPt(25.2), cmToPt(26.3), cmToPt(27.4)]
    // repurpose posY
    posY = [cmToPt(4.8), cmToPt(6.6), cmToPt(8.6), cmToPt(10.6), cmToPt(12.8)]
    
    
    // for(let i=0; i<iconSources.length; i++) {
    //     // get the icon name from the path   img/personalCost.png
    //     let srcPath = iconSources[i]
    //     let iconName = srcPath.slice(srcPath.indexOf("/")+1, srcPath.indexOf("."));

    //     for(let j=1; j<=3;j++) { // three icons per row
    //         let imgElement = document.createElement("img");
    //         let status = "";
    //         if(j <= action.iconsValuation[iconName]) {
    //             status = "-highlighted";
    //         } else if (j-0.5 <= action.iconsValuation[iconName]) {
    //             status = "-half-highlighted";
    //         }
    //         srcPath = srcPath.slice(0, -4) + status + srcPath.slice(-4);  
    //         imgElement.src = srcPath;
    //         imgElement.classList.add("icon");
    //         imgElement.classList.add("me-2");
    //         iconContainers[i].appendChild(imgElement);
    //         srcPath = iconSources[i] // reset srcPath because we defined it outside of the loop
    //     }
    // }

    // // the last icon has a different path schema (file names) and needs to be be done separately
    // let names = ["img/grundstueck.png", "img/stadtteil.png", "img/stadt.png"];
    // for(let i=0;i<names.length;i++) {
    //     let imgElement = document.createElement("img");
    //     let srcPath = names[i];
    //     let status = "";
    //     if(i <= action.iconsValuation["area"]) {
    //         status = "-highlighted";
    //     } else if (i-0.5 <= action.iconsValuation["area"]) {
    //         status = "-half-highlighted";
    //     }
    //     srcPath = srcPath.slice(0, -4) + status + srcPath.slice(-4);  
    //     imgElement.src = srcPath;
    //     imgElement.classList.add("icon");
    //     imgElement.classList.add("me-2");
    //     iconContainers[iconContainers.length-1].appendChild(imgElement)
    // }


    // iterate row-wise from top to bottom, left to right
    for(let i=0;i<posY.length;i++) {
        for(let j=0;j<posX.length;j++) {

            let srcPath = iconSources[i];
            let iconName = srcPath.slice(srcPath.indexOf("/")+1, srcPath.indexOf("."));
            let status = "";
            if(j <= action.iconsValuation[iconName]) {
                status = "-highlighted";
            } else if (j-0.5 <= action.iconsValuation[iconName]) {
                status = "-half-highlighted";
            }
            srcPath = srcPath.slice(0, -4) + status + srcPath.slice(-4);

            let imgElement = document.createElement("img");
            imgElement.src = srcPath;
            imgElement.classList.add("icon");
            imgElement.classList.add("me-2");

            doc.addImage(
                imgElement,
                "png",
                posX[j],
                posY[i],
                cmToPt(0.9 * 0.875),
                cmToPt(0.9),
                "",
                "FAST",
                0
            )
        }
    }

    // the last icon has a different path schema (file names) and needs to be be done separately
    let lastIconPaths = ["img/grundstueck.png", "img/stadtteil.png", "img/stadt.png"];
    for(let i=0;i<lastIconPaths.length;i++) {
        let srcPath = lastIconPaths[i];
        let status = "";
        if(i <= action.iconsValuation["area"]) {
            status = "-highlighted";
        } else if (i-0.5 <= action.iconsValuation["area"]) {
            status = "-half-highlighted";
        }
        srcPath = srcPath.slice(0, -4) + status + srcPath.slice(-4);  
            
        let imgElement = document.createElement("img");
        imgElement.src = srcPath;
        imgElement.classList.add("icon");
        imgElement.classList.add("me-2");

        doc.addImage(
            imgElement,
            "png",
            posX[i],
            cmToPt(14.9),
            cmToPt(0.9 * 0.875),
            cmToPt(0.9),
            "",
            "FAST",
            0
        )
    }


   // page number
   doc.setFontSize(10);
   doc.setFont("Helvetica", "normal")
   doc.setTextColor("#000000");
   text = "Seite " + (doc.internal.getCurrentPageInfo().pageNumber - 1) // ignore cover sheet
   doc.text(text, cmToPt(28.7), cmToPt(20.3), {
       align: "right",
       baseline: "middle"
   });

    
}

function showPDFExportResultOverlay(status) {
    let overlay = document.getElementById("loading-overlay");
    let spinner = document.getElementById("loading-overlay-spinner");
    let icon = document.createElement("i");
    icon.classList.add("far");
    icon.classList.add("fa-3x");
    if(status === "success") {
        icon.classList.add("fa-check-circle");
        icon.style.color = "green";
    } else {
        icon.classList.add("fa-times-circle");
        icon.style.color = "red"
    }
    spinner.replaceChild(icon, spinner.firstChild);

    overlay.addEventListener("click", function(event) {
        JsLoadingOverlay.hide();
    });
}

function calculateScreenDpi() {
    // create a hidden div that is one inch high
    let div = document.createElement("div")
    div.style.height = "1in";
    div.style.position = "absolute";
    div.style.left = "-100%";
    div.style.top = "-100%";
    document.getElementsByTagName("body")[0].append(div);
    const dpi = div.offsetHeight
    div.style.display = "none";
    return dpi
}

function cmToPt(cm) {
    return cm * 28.3465;
}

function ptToCm(pt) {
    return pt / 28.3465
}

function pxToPt(px) {
    return px * 0.75;
}

function ptToPx(pt) {
    return pt / 0.75;
}

/**
 * 
 * @param {*} canvas 
 * @param {*} doc 
 * @param {*} canvasScale | canvas scale factor
 * @param {*} sx | margin from left border in source canvas
 * @param {*} sy | margin from top border in source canvas
 * @param {*} sWidth | width of the source image
 * @param {*} sHeight | height of the source image
 * @param {*} dx | margin from left border in target canvas
 * @param {*} dy | margin from top border in target canvas 
 * @param {*} dWidth | width of the target image
 * @param {*} dHeight | height of the target image
 * @param {*} imgX | where to place the image on the pdf page (left margin)
 * @param {*} imgY | where to place the image on the pdf page (top margin)
 * @returns 
 */
function printPartialCanvas(canvas, doc, canvasScale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, imgX, imgY) {
    console.log(canvas, doc, canvasScale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, imgX, imgY);
    dHeight = dHeight * canvasScale
    sHeight = sHeight * canvasScale;
    let tempCanvas = document.createElement("canvas"),
    tCtx = tempCanvas.getContext("2d");
    tempCanvas.width = canvas.width;
    tempCanvas.height = dHeight;
    tCtx.drawImage(canvas, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    
    let image = tempCanvas.toDataURL("image/png");

    doc.addImage(
        image,
        "png",
        cmToPt(imgX),
        cmToPt(imgY),
        pxToPt(tempCanvas.width / canvasScale),
        pxToPt(tempCanvas.height / canvasScale),
        "",
        "SLOW",
        0
    )
    return tempCanvas;
}

/**
 * 
 * @param {*} action 
 * @param {string} property, should be one of "cost", "time" or "area".
 */
function quantifyActionProperty(action, property) {

    let iconsValuationMapping = {
        1: 1,
        2: 1.5,
        3: 2,
        4: 2.5,
        5: 3,

        "keine": 0,
        "gering": 1,
        "gering bis mittel": 1.5,
        "gering - mittel": 1.5,
        "mittel": 2,
        "mittel bis hoch": 2.5,
        "mittel - hoch": 2.5,
        "hoch": 3,

        "kurzfristig": 1,
        "kurz- bis mittelfristig": 1.5,
        "mittelfristig": 2,
        "mittel- bis langfristig": 2.5,
        "langfristig": 3,

        "grundstück/immobilie": 1,
        "stadtteil/quartier": 1,
        "gesamtstadt": 1

    }
    let propertyValue = action[property].trim();
    // check the type to see which words we have to check for
    // cost contains more information than time and area
    switch(property) {

        case "cost": {
            // we assume cost is formatted like this: Personalkosten (hoch), Sachkosten (mittel bis hoch), ....

            let regex = new RegExp("Personal(kosten)?\\s?\\((keine|gering (-|bis) mittel|gering|mittel (-|bis) hoch|mittel|hoch)\\)(,|;)\\s?Sach(kosten)?\\s?\\((keine|gering (-|bis) mittel|gering|mittel (-|bis) hoch|mittel|hoch)\\)?", "gi")
            if( !propertyValue.match(regex)) {
                throw "property cost of action " + action.title + " does not match required schema.";
            } else {
                // split property value to handle personal cost and investment cost separately
                let splitted = propertyValue.split(/[,|;]/g);
                let startIdx = splitted[0].indexOf("(") + 1; // exclude '('
                let endIdx = splitted[0].indexOf(")");
                let match = splitted[0].slice(startIdx, endIdx).toLowerCase();
                if(match in iconsValuationMapping) {
                    action.iconsValuation["personalCost"] = iconsValuationMapping[match];
                }
                startIdx = splitted[1].indexOf("(") + 1;
                endIdx = splitted[1].indexOf(")");
                match = splitted[1].slice(startIdx, endIdx).toLowerCase();
                if(match in iconsValuationMapping) {
                    action.iconsValuation["investmentCost"] = iconsValuationMapping[match];
                }

            }
            break;
        }

        case "time": {
            let expression = "";
            for(let i=0;i<timeArray.length;i++) {
                expression += timeArray[i] + ".*";
                if(i<timeArray.length-1)
                    expression += "|";
            }
            let regex = new RegExp(expression, "gi");
            if( !propertyValue.match(regex)) {
                throw "property time of action " + action.title + " does not match required schema.";
            } else {
                propertyValue = propertyValue.toLowerCase();
                for(let i=0;i<timeArray.length;i++) {
                    // we can do this because we check for 'kurz- bis mittelfristig' before 'mittelfristig'
                    if(propertyValue.includes(timeArray[i])) {
                        action.iconsValuation["time"] = iconsValuationMapping[timeArray[i]];
                        break;
                    }
                }
            }
            break;
        }

        case "area": {
            let expression = "";
            for(let i=0;i<areaArray.length;i++) {
                expression += areaArray[i] + ".*";
                if(i<areaArray.length-1)
                    expression += "|";
            }
            let regex = new RegExp(expression, "gi");
            if( !propertyValue.match(regex)) {
                throw "property area of action " + action.title + " does not match required schema.";
            } else {
                propertyValue = propertyValue.toLowerCase();
                action.iconsValuation["area"] = []
                let arr = action.iconsValuation["area"];
                for(let str of areaArray) {
                    propertyValue.includes(str.toLowerCase()) ? arr.push(1) : arr.push(0);
                }
            }
            break;
        }
    }
}

function initializeAdvancedFilter(actions) {
    // get the list elements to fill
    let actorListEl= document.getElementById("advancedFilterActorsList");
    let areaListEl = document.getElementById("advancedFilterAreaList");
    let themeListEl = document.getElementById("advancedFilterThemeList");
    let categories = ["actors", "area", "theme"]
    
    /*
    should look something like this later:
    uniqueFilterOptions = {
        areas: [
            ["Immobilie/Grundstück", 1],
            ["Stadtteil/Quartier", 4],
            ["Gesamtstadt", 2]
        ],
        actors: [
            ...
        ], 
        themes: [
            ...
        ]
    }
    */
    let uniqueFilterOptions = {};
    

    // for each category
    for(let i=0;i<categories.length;i++) {
        let category = categories[i];
        uniqueFilterOptions[category] = [];
   
        actions.forEach((action, idx) => {
            let arr = action[category].split(",");
            for(let element of arr) {
                element = removeHtmlTags(element);

                // array of first subArray elements, which are the names
                let temp = uniqueFilterOptions[category].map( (subArr) => {
                    return subArr[0];
                })

                
                if( !temp.includes(element) )
                    uniqueFilterOptions[category].push( [element, 1] ); // create new subarry with counter set to one
                else {
                    // get index of array where we have to increment the counter
                    let idx = temp.indexOf(element);
                    uniqueFilterOptions[category][idx][1] += 1; // increment counter
                }
            }
        });
    }

    // sort unique categories by relevanye (number of actions that inclde them)


    for(let category in uniqueFilterOptions) {
        // sort categories by relevanye (number of actions that inclde them)

        // sort descending by second array element, which is the counter of how often this element occurred in all actions.
        uniqueFilterOptions[category].sort( (a, b) => b[1] - a[1] );

        uniqueFilterOptions[category].forEach( (el, idx) => {
            let listEl = document.createElement("li");

            let label = document.createElement("label");
            label.classList.add("control", "control-checkbox");    

            let p = document.createElement("p")
            p.innerText = el[0] + " [" + el[1] + "]"; // 0 is name, 1 is counter
            p.classList.add("mb-0")

            let chb = document.createElement("input");
            chb.type ="checkbox";
            chb.value = p.innerText;
            chb.addEventListener("change", function() { filterActionsAdvanced() });
            //let chbName = category + "_" + idx + "_chb";

            let div = document.createElement("div")
            div.classList.add("control_indicator")
            
            label.appendChild(p);
            label.appendChild(chb)
            label.appendChild(div)
            listEl.appendChild(label);

            switch(category) {
                case "actors": {
                    actorListEl.appendChild(listEl);
                    break;
                }
                case "area": {
                    areaListEl.appendChild(listEl);
                    break;
                } 
                case "theme": {
                    themeListEl.appendChild(listEl);
                    break;
                }
            }
        });
    }


    // sliders
    let sliders = document.querySelectorAll("#advancedFilterWrapper div[class='filterSlider']");
    sliders.forEach( (slider) => {
        $(slider).slider({
            range: true,
            min: 1,
            max: 3,
            step: 0.5,
            values: [1, 3],
            slide: function( event, ui ) {
              filterActionsAdvanced(event.target.id, ui.values);
            }
        });
    })

    // add popovers to slider info icons
    let popoverTriggerList = [].slice.call(document.querySelectorAll('#advancedFilterWrapper [data-bs-toggle="popover"]'))
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
}

// the resulting lists might be too long for the div (it has a max height)
// so we only display the list elements that fit in the div and add an "expand" button at the bottom.
// if this button is clicked, the full list is shown
function capAdvancedFilterColumnHeight(advancedFilterWrapper) {
    // for column one, two and three
    let columns = advancedFilterWrapper.querySelectorAll("#advancedFilterCol1, #advancedFilterCol2, #advancedFilterCol3");
    
    // test if the scroll area apperas at the corrct usedHeight by restricting list length
    // let a = columns[0].querySelector("ul").children;
    // for (let i=a.length-1;i>7;i--) {
    //     a[i].remove();
    // }

    for(let i=0;i<columns.length;i++) {
        let columnDiv = columns[i];
        let divHeight = columnDiv.offsetHeight;
        let availableHeight = divHeight;
        availableHeight -= 20; // 10 px padding top and bot
        
        // get list height, there is more than one list in col 2
        let usedHeight = 0;
        columnDiv.querySelectorAll("ul").forEach( list => {
            usedHeight += list.offsetHeight;
        });
        // add heading height to list height, again there is more than one heading in col 2
        columnDiv.querySelectorAll("h3").forEach (heading => {
            usedHeight += heading.offsetHeight;
        })

        // compare heights
        if(availableHeight < usedHeight) {
            // create scroll div
            columnDiv.style.overflowY = "scroll";
        }
    }
}

/**
 * 
 * @param {object[]} links | array of link positions
 * @param {object} doc | jspdf object
 * @param {int} idx | index of current action, used to revert the x offset
 * @param {float} detailsTableOffsetX | the offset of the details table relative to the top left corner in cm
 * @param {float} detailsTableOffsetY | the offset of the details table relative to the top left corner in cm
 * @param {int} rowHeightSumOfPrevPagesPt | the sum of row heights from all prior pages.
 */
function makePdfLinksInteractive(links, doc, idx, detailsTableOffsetX, detailsTableOffsetY, rowHeightSumOfPrevPagesPt=0) {
    console.log("links in function: ", links);
    
    doc.setFillColor("#FF0000")
    let detailsTableOffsetXPt = cmToPt(detailsTableOffsetX)
    let detailsTableOffsetYPt = cmToPt(detailsTableOffsetY)

    for(let link of links) {

        console.log("top: ", link.position.top)
        console.log("topPt: ", pxToPt(link.position.top))
        console.log("pxToPt(link.position.top) ", pxToPt(link.position.top));
        console.log("rowHeightSumOfPrevPagesPt: ", rowHeightSumOfPrevPagesPt);
        console.log("detailsTableOffsetYPt: ", detailsTableOffsetYPt);
        console.log("pxToPt(link.position.left + 20000 + (1000 * idx)) + detailsTableOffsetXPt", pxToPt(link.position.left + 20000 + (1000 * idx)) + detailsTableOffsetXPt);
        console.log("pxToPt(link.position.top) + detailsTableOffsetYPt - rowHeightSumOfPrevPagesPt", pxToPt(link.position.top) + detailsTableOffsetYPt - rowHeightSumOfPrevPagesPt);
        console.log("pxToPt(link.position.width) ", pxToPt(link.position.width));
        console.log("pxToPt(link.position.height) ", pxToPt(link.position.height));
        
        // can be used to draw a red rectangle where links are placed for better debugging
        // doc.rect(
        //     pxToPt(link.position.left + 20000 + (1000 * idx)) + detailsTableOffsetXPt,
        //     pxToPt(link.position.top) + detailsTableOffsetYPt - rowHeightSumOfPrevPagesPt,
        //     pxToPt(link.position.width),
        //     pxToPt(link.position.height),
        //     "f");
        
        doc.link(
            pxToPt(link.position.left + 20000 + (1000 * idx)) + detailsTableOffsetXPt, // -1000 for each action, so we have to revese this here
            pxToPt(link.position.top) + detailsTableOffsetYPt - rowHeightSumOfPrevPagesPt, // subtract height of previous pages if there are any
            pxToPt(link.position.width),
            pxToPt(link.position.height), {
            url: link.url
        });
        
    }
    
}



function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function removeHtmlTags(el) {
    return el.replace(/(<([^>]+)>)/gi, "").trim();
}

main();