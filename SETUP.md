# BWE Setup Instructions

### Requirements
- NodeJS v19 or later
- Latest release of npm

#### Requirements (optional)
- Latest release of Nginx

<br>

### Code Dependencies
- Sass
- Git
- FS
- ExpressJS
- Discord Webhook Node
- Cookie Parser
- Body Parser
- Sanitize HTML
- Winston
- URL
- HTTP
- Merge
- Nodemon
- Got

<br>
<hr>

In a terminal/command prompt, navigate to where you'd like BonziWORLD Enhanced to be placed and run the following:
```
git clone https://github.com/CosmicStar98/BonziWORLD-Enhanced
cd BonziWORLD-Enhanced
```
## Client
```
This part is unneeded. The client comes pre-built.
```
## Server
```
npm i --force
node server.js
```
### Server (nginx)
<pre><span><code><a href="https://www.youtube.com/watch?v=krcYPrjIDzU" alt="Tutorial" title="Tutorial">Tutorial</a>
</code></span></pre>

After this, BonziWORLD Enhanced will be accessible on port 3000. ([localhost:3000](http://localhost:3000 "localhost on port 3000..."))
<br><br>
## Replit/Glitch
If you are using replit or glitch this project will require additional steps.

<pre><span><code>open "/json/settings.json" in your prefered text editor and scroll all the way to the bottom,
find an option called "isReplit" and set it to true.
Once activated, this will secure your server from people viewing the server's godword by making it a random string of numbers which get regenerated each time the server reboots/restarted. Additionally, this setting will make the server be hosted on port 80 so it is compatable with these services.
</code></span></pre>

<hr>
<br>

#### Disclaimer
I'm not responsible if you screw up anything with your computer while setting this up. I have no idea how you would, but someone will find a way. I also will not provide support for installing dependencies. If you have everything installed properly, the above commands will work.

