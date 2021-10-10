import '../css/Instructions.css';
import React from 'react';

const Instructions = () => {
    return (
        <div class="instructions">
            <h2 class="title">Instructions</h2>

            <div class="main">
                <p class="instp">Follow these instructions, and you will have your very own custom theme in just a few minutes! <b><em>Let's dig in!</em></b></p>
                <p class="instp">First, just go to the top of the page and pick colors until you have the theme you want. All the changes you make will show up in real time on the code box to the right. You can either use the color picker to help you choose, or input a hex code for a color you already know. There are awesome websites like <a class="link" target="_blank" rel="noreferrer" href="https://www.canva.com/colors/color-palette-generator/">Canva</a>, <a class="link" target="_blank" rel="noreferrer" href="https://coolors.co/">Coolors</a>, or any other palette generating website that will help you find colors that you like together, so I would definitely recommend checking them out!</p>
                <p class="instp">After you have the theme you want, just click the export button to download the customized <tspan class="inlinecode">.json</tspan> file for your theme. You will need a few extra things to get it completely up and running, but don't worry - it will be quick and easy.</p>
                <p class="instp">First use <tspan class="inlinecode">npm</tspan> to install <a class="link" target="_blank" rel="noreferrer" href="https://github.com/microsoft/vscode-generator-code">yo generator-code</a>, a tool built by Microsoft that will create all the necessary packages for your theme to work.</p>

                <div class="code">
                    <text>
                        <tspan style={{color:'#C15F6F'}}>npm </tspan>
                        <tspan style={{color:'#84B5CA'}}>install </tspan>
                        <tspan style={{color:'#F9A64E'}}>-g </tspan>
                        <tspan style={{color:'#84B5CA'}}>yo generator-code</tspan>
                    </text>
                </div>

                <p class="instp">After it installs, run <tspan class="inlinecode">yo code</tspan> in your terminal. Select <tspan class="inlinecode">New Color Theme</tspan>, then <tspan class="inlinecode">No, Start Fresh</tspan>. Provide the name of your theme, an identifier, the description, and the style. Afterwards, I would definitely recommend initializing a git repository, as it will make your life easier in the future when you decide to update your theme.</p>

                <div class="code">
                    <text>
                        <tspan style={{color:'#C15F6F'}}>yo </tspan>
                        <tspan style={{color:'#84B5CA'}}>code</tspan>
                    </text><br /><br />
                    <text>
                        <tspan style={{color:'#F9A64E'}}>? </tspan>
                        <tspan style={{color:'#C15F6F'}}>What type of extension would you like to create? </tspan>
                        <tspan style={{color:'#84B5CA'}}>New Color Theme</tspan>
                    </text><br />
                    <text>
                        <tspan style={{color:'#F9A64E'}}>? </tspan>
                        <tspan style={{color:'#C15F6F'}}>Do you want to import or convert an existing TestMate color theme? </tspan>
                        <tspan style={{color:'#84B5CA'}}>No, Start Fresh</tspan>
                    </text><br />
                    <text>
                        <tspan style={{color:'#F9A64E'}}>? </tspan>
                        <tspan style={{color:'#C15F6F'}}>What's the name of your extension? </tspan>
                        <tspan style={{color:'#84B5CA'}}>My Color Theme</tspan>
                    </text><br />
                    <text>
                        <tspan style={{color:'#F9A64E'}}>? </tspan>
                        <tspan style={{color:'#C15F6F'}}>What's the identifier of your extension? </tspan>
                        <tspan style={{color:'#84B5CA'}}>my-color-theme</tspan>
                    </text><br />
                    <text>
                        <tspan style={{color:'#F9A64E'}}>? </tspan>
                        <tspan style={{color:'#C15F6F'}}>What's the description of your extension? </tspan>
                        <tspan style={{color:'#84B5CA'}}>My Color Theme, created on www.codethemecustomizer.com!</tspan>
                    </text><br />
                    <text>
                        <tspan style={{color:'#F9A64E'}}>? </tspan>
                        <tspan style={{color:'#C15F6F'}}>What's the name of your theme shown to the user? </tspan>
                        <tspan style={{color:'#84B5CA'}}>My Color Theme</tspan>
                    </text><br />
                    <text>
                        <tspan style={{color:'#F9A64E'}}>? </tspan>
                        <tspan style={{color:'#C15F6F'}}>Select a base theme: </tspan>
                        <tspan style={{color:'#84B5CA'}}>Dark</tspan>
                    </text><br />
                    <text>
                        <tspan style={{color:'#F9A64E'}}>? </tspan>
                        <tspan style={{color:'#C15F6F'}}>Initialize a base repository? </tspan>
                        <tspan style={{color:'#84B5CA'}}>Yes</tspan>
                    </text><br />
                </div>

                <p class="instp">Finally, go to the created theme's repository on your local machine, and replace the contents of the <tspan class="inlinecode">.json</tspan> file inside of the directory labelled <tspan class="inlinecode">themes/</tspan> with the contents of the <tspan class="inlinecode">.json</tspan> file you downloaded from this website.</p>
                <p class="instp"><b><em>It's as simple as that!</em></b> If you want to use your theme on your local machine, move the whole repository to <tspan class="inlinecode">usr/.vscode/extensions</tspan>. If you want to publish it <em>(which you should)</em>, it takes a little longer, but is still quite simple, and well worth the time. Youtuber <a class="link" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCzNf0liwUzMN6_pixbQlMhQ">Coder Coder</a> has a fantastic video on the whole process of creating a VSCode color theme, including packaging and publishing on VSCode Marketplace. <a class="link" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=pGzssFNtWXw">Click here</a>, then skip to the minute mark <tspan style={{color:"#d6d6d6"}}>10:00</tspan> to learn how to publish it, and eventually update it. Big shoutout to Coder Coder for inspiration for this page of the website!</p>
                <p class="instp">Whew, you're done! Enjoy your very own, very <em>you</em> color theme! Hope to see it on the marketplace!</p>

                <p class="instp">If you enjoyed this, please consider <a class="link" target="_blank" rel="noreferrer" href="https://paypal.me/zachariahderrick">supporting this website!</a> It takes time and money to create websites, and I would appreciate any support! It can even be as small as just buying me a coffee!</p>
            </div>
        </div>
    )
}

export default Instructions;
