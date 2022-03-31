const tabList = document.querySelector('[role="tablist"]');

const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
})



function changeTabFocus(e){
     // left key 37 right key 39
     let leftKey = 37;
     let rightKey = 39;
 
     if(e.keyCode === leftKey || e.keyCode === rightKey){
         console.log(tabs[tabFocus])
         tabs[tabFocus].setAttribute('tabindex', -1);
     }
 
     if (e.keyCode === rightKey){
         tabFocus++;
         if(tabFocus >= tabs.length){
             tabFocus = 0;
         }
     }
 
     if (e.keyCode === leftKey){
         tabFocus--;
         if(tabFocus <= 0){
             tabFocus = tabs.length -1 ;
         }
     }
 
     tabs[tabFocus].setAttribute('tabIndex', 0)
     tabs[tabFocus].focus()
}

function changeTabPanel(e){
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute('aria-controls');
    const targetImage = targetTab.getAttribute('data-image');

    

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer.querySelector('[aria-selected=true]').setAttribute('aria-selected', false);

    targetTab.setAttribute('aria-selected', true);

    // console.log(tabContainer, mainContainer)

    hideContent(mainContainer, '[role="tabpanel"]');

    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    // showContent(mainContainer, [`#${targetPanel}`])

    hideContent(mainContainer, 'picture');

    mainContainer.querySelector([`#${targetImage}`]).removeAttribute('show');
    // showContent(mainContainer, [`#${targetImage}`])
}

function hideContent(parent, content){
    if(content === 'picture'){
        parent.querySelectorAll(content).forEach(item => item.setAttribute('show', 'false'));
    }else{
        parent.querySelectorAll(content).forEach(item => item.setAttribute('hidden', true));
    }
}

// function showContent(parent, content){
//     if(content === 'show'){
//         mainContainer.querySelector(content).removeAttribute('show');
//     }else{
//         mainContainer.querySelector(content).removeAttribute('hidden');
//     }
// }