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

function main() {
    initializeGrid();

    dpi = calculateScreenDpi();
    actions.forEach((action, idx) => {
        quantifyActionProperty(action, "cost");
        quantifyActionProperty(action, "time");
        quantifyActionProperty(action, "area");
    });

    // advanced filter
    populateAdvancedFilter(actions);
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

    console.log(actions);
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
        
        element.querySelector(".card-problem").innerHTML = "<b>Problem:</b>" + action.problem;
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
        btn.addEventListener("click", function() {
            filterActions(false);
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
            filterActions(false)
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
            filterActions(false)
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
                grid.arrange()
            },false);
          });

    }
}


/**
 * We need to use sliderValue as a paremeter because the filter function is called during a slide (mouse still clicked).
 * If we get the slider value from inside the function, we would get the value from before the slide
 * @param {boolean} advanced | 
 * @param {boolean} usedSliderId | id of the used slider, optional
 * @param {float[]} sliderValue | current value of the used slider, optional
 */
function filterActions(advanced, usedSliderId, sliderValue) {
    let filterResult = actions.slice(0);
    if(advanced) {
        // for the advanced filter we have to get all filter criteries first
        let filterCriteria = {};
        let chb_categories = ["actors", "area", "theme"];
        for(let i=0;i<chb_categories.length;i++) {
            let category = chb_categories[i];
            let chbs = document.querySelectorAll("#advancedFilter" + capitalizeFirstLetter(category) + "List li input:checked");
            let chbsArr = Array.from(chbs);
            let values = chbsArr.map (obj => {
                return obj.value;
            });
            filterCriteria[category] = values;
        }

        //get slider values
        let slider_categories = [];
        let rangeSliders = document.querySelectorAll("#advancedFilterCol3 .filterSlider, #advancedFilterCol4 .filterSlider");
        rangeSliders.forEach( slider => {
            slider_categories.push(slider.id.replace("-slider", ""));
        });

        for(let i=0;i<slider_categories.length;i++) {
            let category = slider_categories[i];
            if(usedSliderId && usedSliderId.split("-")[0] === category) {
                filterCriteria[category] = sliderValue;
            }
        }

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
                    
                    return obj.iconsValuation[filterProp] >= filterCriteria[filterProp][0] &&
                        obj.iconsValuation[filterProp] <= filterCriteria[filterProp][1];
                });
            }

        }
    }

    clearItems();
    let cards = createActionCards(filterResult);
    insertCards(cards, grid);
}


function showAllActions(event) {
    // if button was clicked
    if(event) {
        // highlight it
        highlightButton(event.target);
    }
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
    let btns = document.querySelectorAll(".topRowBtn");
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
    console.log(action.interactions);
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
    actions.sort((a, b) => (a.number > b.number) ? 1 : -1)

    for(let i=0;i<actions.length;i++) {
        let action = actions[i];
        let idx = i;

        doc.addPage("a4", "landscape");
        setupStaticPdfPageElements(doc, action);
        toc.push({
            action: action,
            pageNr: doc.internal.getCurrentPageInfo().pageNumber - 1 // ignore cover page
        });


        // Since we have one pdf to work on we will do everything syncronous.
        // Async functions have shown to cause problems, since we print to the wrong page, have wrong colors set, etc.
        
        updateDetailsTable(action) // set content for details table to the current action
        let detailsTable = document.querySelector(".detailsTable");
        const detailsTableOffsetX = 0.6; // in cm
        const detailsTableOffsetY = 3; // in cm
        let links = [] // stores the bounding rectangles where links would be inserted, so that this can be done manually
        // create a copy of the dom node outside of viewport, convert it to a canvas and screenshot it
        // html2canvas does not work properly with bootstrap modals.
        // so we copy our table to the main page, take the screenthot and delete the clone
        let duplicateDetailsTable = detailsTable.cloneNode(true);
        document.body.appendChild(duplicateDetailsTable)
        duplicateDetailsTable.style.position = 'absolute';
        duplicateDetailsTable.style.left = -20000 - 1000*idx + "px"; // -20000, -21000, -22000, ...
        duplicateDetailsTable.style.top = '10px';
        duplicateDetailsTable.style.width = "19.1cm"
        
        doc.setFont("Helvetica", "normal")
        doc.setTextColor("#000000")
        let canvasScale = 2
        let canvas = await html2canvas(duplicateDetailsTable, {
            removeContainer: false,
            logging: false,
            scale: canvasScale,
            onclone: function(clonedDoc, element) {
               let elements = element.querySelectorAll("tr td:last-child");
               elements.forEach(function(element) {
                   console.log(element);
                   element.style.textAlign = "justify";
                   element.style.fontSize = "10pt";
                   //element.style.hyphens = "auto";
               });
            }
        });

        try {
            // check if image fits on one page
            let availablePageHeightPt = cmToPt(16.8); // 21cm - 3cm (top) - 1.2cm (bottom)
            let canvasHeightPt = pxToPt(canvas.height / canvasScale);
            // if it does we just add it
            if(availablePageHeightPt >= canvasHeightPt) {
                doc.addImage(
                    canvas,
                    "png",
                    cmToPt(0.6),
                    cmToPt(3),
                    pxToPt(canvas.width / canvasScale),
                    pxToPt(canvas.height / canvasScale),
                    "",
                    "SLOW",
                    0
                )
            } else {
                // If not we need to split the canvas in multiple parts.
                // We iterate the table rows and check for each one if it fits on the page
                // As soon as we reach the one that exceeds the available height we split the canvas,
                // insert the first part and jump to the next page where we repeat the process until
                // the complete canvas is inserted.
                
                let usedTotalHeightPt = pxToPt(0); // used height across all pages
                let usedPageHeightPt = pxToPt(0); // used height on current page
                // get rows
                let rows = duplicateDetailsTable.querySelectorAll("tr")
                console.log(rows);

                for(let j=0;j<rows.length;j++) {
                    console.log("j=", j);
                    let row = rows[j];
                    console.log(row.children[0].innerHTML);
                    let currentRowHeight = row.getBoundingClientRect().height;
                    let rowHeightSumPt = usedPageHeightPt + pxToPt(currentRowHeight)
                    console.log("rowHeightSumPt is:", rowHeightSumPt);
                    if(rowHeightSumPt <= availablePageHeightPt) {
                        console.log("fits on page");
                        console.log("rowHeightSumPt: ", rowHeightSumPt, " availablePageHeightPt: ", availablePageHeightPt);
                        usedPageHeightPt = rowHeightSumPt; // update used page height
                        // if it is the last row we print the rest
                        if(j == rows.length-1) {
                            console.log("last row");
                            console.log("used total height in px: ", ptToPx(usedTotalHeightPt));
                            // we can use availablePageHeightPt instead of usedPageHeightPt here, because we want to print the whole page height
                            let sx =  0;
                            let sy = ptToPx(usedTotalHeightPt);
                            let sWidth = canvas.width;
                            let sHeight = ptToPx(availablePageHeightPt) * canvasScale
                            let dx = 0;
                            let dy = 0;
                            let dWidth = canvas.width;
                            let dHeight = ptToPx(availablePageHeightPt) * canvasScale;

                            let tempCanvas = printPartialCanvas(canvas, doc, canvasScale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, detailsTableOffsetX, detailsTableOffsetY);
                            usedTotalHeightPt = pxToPt(tempCanvas.height);
                        }
                        
                    } else {
                        console.log("doesn't fit on page");
                        let sx =  0;
                        let sy = ptToPx(usedTotalHeightPt);
                        let sWidth = canvas.width;
                        let sHeight = ptToPx(usedPageHeightPt) * canvasScale
                        let dx = 0;
                        let dy = 0;
                        let dWidth = canvas.width;
                        let dHeight = ptToPx(usedPageHeightPt) * canvasScale;

                        let tempCanvas = printPartialCanvas(canvas, doc, canvasScale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, detailsTableOffsetX, detailsTableOffsetY);
                        usedTotalHeightPt += pxToPt(tempCanvas.height);
                        
                        // then switch to next page and reset used height
                        doc.addPage("a4", "landscape");
                        setupStaticPdfPageElements(doc, action);
                        // put row that didn't fit on last page on this page
                        usedPageHeightPt = pxToPt(currentRowHeight);
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
    doc.text('Maßnahmenauswahl\nzur\nUrbanen Produktion', cmToPt(10.5), cmToPt(8), {
        align: 'center'
    });

    // toc
    //TODO remove! Insert some placeholder actions into toc for testing
    toc.push({action: {number: "3.1.5", title: "Gewerbliiches Liegenschaftskataster"}, pageNr: 3});
    toc.push({action: {number: "3.2.2", title: "Sensibilisierung"}, pageNr: 5});
    toc.push({action: {number: "3.2.8", title: "Förderprogramme und Finanzierungsmöglichkeiten"}, pageNr: 7});
    for(let i=0; i<15;i++) {
        toc.push({action: {number: "3.3.1", title: "Mobilisierung der Eigentümer und Nachbarschaft"}, pageNr: 42});
    }
    

    doc.setFontSize(24);
    doc.text("Inhalt", cmToPt(1.5), cmToPt(13));
    doc.setFontSize(14);
    let tocStartY = cmToPt(14.2);
    let tocBreakpointY = cmToPt(26)
    let dy = cmToPt(1);
    for(let i=0; i<toc.length; i++) {
        let tocEntry = toc[i];
        let yPos = tocStartY + i * dy;

        if(yPos < tocBreakpointY) {
            // if it fits on first page
            doc.text(tocEntry.action.number, cmToPt(1.5), yPos); // number
            doc.text(tocEntry.action.title, cmToPt(2.5), yPos, {
                maxWidth: cmToPt(15)
            }); // title
            doc.text(tocEntry.pageNr.toString(), cmToPt(19), yPos, {
                align: 'right'
            }); // page number
        } else {
            // if it is the first tocEntry that doesn't fit on first page
            // setup new cover sheet and reset yPosition
            //console.log("TOO BIG");
        }
            
        
    }

    // bottom logos
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

function setupStaticPdfPageElements(doc, action) {
    doc.setLineWidth(cmToPt(0.07));
    doc.setDrawColor("#333333");
    let text; // we use this variable multiple time to store text from the modal

    doc.rect(cmToPt(0.3), cmToPt(0.3), cmToPt(29.1), cmToPt(20.4)); // outer line
    doc.setFillColor("#006059") //green
    doc.rect(cmToPt(0.3), cmToPt(0.3), cmToPt(29.1), cmToPt(2), "F"); // top rect
    doc.setLineWidth(cmToPt(0.05));
    doc.line(cmToPt(20), cmToPt(2.9), cmToPt(20), cmToPt(19.7)) // vertical line
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
    console.log("generating icons in pdf");
    for(let i=0;i<posY.length;i++) {
        for(let j=0;j<posX.length;j++) {
            console.log("i: ", i, " j: ", j);
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
        console.log("i: ", i);
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
    let tempCanvas = document.createElement("canvas"),
    tCtx = tempCanvas.getContext("2d");
    tempCanvas.width = canvas.width;
    tempCanvas.height = dHeight;
    tCtx.drawImage(canvas, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    
    let image = tempCanvas.toDataURL("image/png");
    console.log(image);
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

function populateAdvancedFilter(actions) {
    // get the list elements to fill
    let actorListEl= document.getElementById("advancedFilterActorsList");
    let areaListEl = document.getElementById("advancedFilterAreaList");
    let themeListEl = document.getElementById("advancedFilterThemeList");
    let categories = ["actors", "area", "theme"]
    let uniqueFilterOptions = {};
    
    // for each category
    for(let i=0;i<categories.length;i++) {
        let category = categories[i];
        uniqueFilterOptions[category] = [];
        
        actions.forEach((action, idx) => {
            let arr = action[category].split(",");
            for(let element of arr) {
                element = removeHtmlTags(element);
                if(!uniqueFilterOptions[category].includes(element))
                    uniqueFilterOptions[category].push(element);
            }
        });
    }
    for(let category in uniqueFilterOptions) {
        uniqueFilterOptions[category].forEach( (el, idx) => {
            let listEl = document.createElement("li");

            let label = document.createElement("label");
            label.classList.add("control", "control-checkbox");    

            let p = document.createElement("p")
            p.innerText = el;
            p.classList.add("mb-0")

            let chb = document.createElement("input");
            chb.type ="checkbox";
            chb.value = p.innerText;
            chb.addEventListener("change", function() { filterActions(true) });
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
              filterActions(true, event.target.id, ui.values);
            }
        });
    })
}

// the resulting lists might be too long for the div (it has a max height)
// so we only display the list elements that fit in the div and add an "expand" button at the bottom.
// if this button is clicked, the full list is shown
function capAdvancedFilterColumnHeight(advancedFilterWrapper) {
    // for column one and two
    let columns = advancedFilterWrapper.querySelectorAll("#advancedFilterCol1, #advancedFilterCol2");
    
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


// util function
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function removeHtmlTags(el) {
    return el.replace(/(<([^>]+)>)/gi, "").trim();
}

function onSliderChbClick(event) {
    let chb = event.target;
    // toggle slider
    let id = chb.id;
    let slider = document.getElementById(id.replace("-chb", ""));
    slider.disabled = false;
    let rangeSlider = slider.nextSibling;
    if(rangeSlider.classList.contains("rangeslider--disabled"))
        rangeSlider.classList.remove("rangeslider--disabled");
    else
        rangeSlider.classList.add("rangeslider--disabled");

    filterActions(true)
}

main();