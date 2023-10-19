 const {app, BrowserWindow}=require('electron');
 const url=require('url');
 const path=require('path')

//  la function pour cree la fenetre

const windowMain=()=>{
    const win=new BrowserWindow({
        title:"Electron App",
        width:1000,
        height:600
    });


    const urlLink=url.format({
        pathname:path.join(__dirname,'./app/build/index.html'),
        protocol:'file'
    })

win.loadURL(urlLink);
}

app.whenReady().then(windowMain)