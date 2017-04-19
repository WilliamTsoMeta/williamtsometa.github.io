https://www.rackaid.com/blog/linux-screen-tutorial-and-how-to/
https://expressjs.com/en/starter/installing.html

1. Download Node.js

You will want to download the latest stable version of Node.js, which can be done by running the command below. It runs a script that automatically steps you through the installation process. The script is downloaded directly from Joylent (the makers of Node.js) at their NodeSource repository.

 cd /tmp
 curl -sL https://rpm.nodesource.com/setup | bash -
notice here need update url flowing the instruction.

2. Install Node.js

Once the script detects that you do not have Node.js installed, enter the following command to begin the install via the yum package manager.

 yum install -y nodejs
3. Install build tools (optional, but recommended)

To compile and install native Node.js addons from npm (node package manager), you will need to install these build tools. It is not essential, but it will save you some headaches when doing npm install package in the future.

 yum install gcc-c++ openssl-devel make



Since this server only use for test we can just stop the firewall for restriction reason

service iptables stop

to make it permanent:
#chkconfig iptables off

use git pull all your code created by create-react-app
npm install
npm start

now you can running the production on server but when you close the terminal the link will be broken
we need SCREEN which can running prompt in background and EXPRESS the Node.js web application framework.

4 installing express

Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

$ mkdir myapp
$ cd myapp
Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

$ npm init
This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:
entry point: (index.js)
Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.
Now install Express in the myapp directory and save it in the dependencies list. For example:
$ npm install express --save
type in flowing code.

var express = require('express')var
 app = express()

app.listen(3000,
function () {

  console.log(
'Example app listening on port 3000!')}
);
app.use(express.
static('public'
));
app.get(
'/index.html', function (req, res) {

   res.sendFile( __dirname +
"/" + "index.html" );})


5.Installing Screen with Yum and using it

Chances are that you already have screen on your system. On most Red Hat and CentOS distributions you can find Linux screen  in /usr/bin/screen. To see if screen is in your path, you can use the which command:

1
2
[root@office ~]# which screen
/usr/bin/screen
If you do not have screen, then you can install it easily from an RPM or the package file for your system. For example, on CentOS you can install screen with yum:

1
2
3
[root@office ~]# yum install screen
...
Complete!
As you probably already have Linux screen or can use an RPM, I am not going to cover the building of screen from source. Lets get on to how to use screen.

Starting Linux Screen

Screen is started from the command line just like any other command:

1
[root@office ~]# screen
You are now inside of a window within screen. This functions just like a normal shell except for a few special characters.

Control Command

Command: “Ctrl-a”

Screen uses the command “Ctrl-a” that’s the control key and a lowercase “a”  as a signal to send commands to screen instead of the shell.

For example, “Ctrl-a” then “?”. You should now have the screen help page.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
Screen key bindings, page 1 of 4.

Command key:  ^A   Literal ^A:  a

break      ^B b          only       Q
clear      C             other      ^A
colon      :             pow_break  B
copy       ^[ [          pow_detach D
detach     ^D d          prev       ^P p ^?
digraph    ^V            readbuf    &amp;amp;amp;lt;
displays   *             redisplay  ^L l
fit        F             removebuf  =
flow       ^F f          reset      Z
focus      ^I            screen     ^C c
hardcopy   h             select     '
help       ?             silence    _
Key bindings are the commands the screen accepts after you hit “Ctrl-a”. You can reconfigure these keys to your liking using a .screenrc file, but I just use the defaults.

Creating Windows

Command: “Ctrl-a” “c”.

To create a new window, you just use “Ctrl-a” “c”.

This will create a new window for you with your default prompt.  Your old window is still active.

For example, I can be running top and then open a new window to do other things. Top stays running! It is still there. To try this for yourself, start up screen and then run top. (Note: I have truncated some screens to save space.)

Start top

1
2
3
4
5
top - 09:10:33 up 35 days, 17:26,  1 user,  load averag
Tasks: 131 total,   1 running, 130 sleeping,   0 stoppe
Cpu(s):  0.4%us,  0.2%sy,  0.0%ni, 99.4%id,  0.0%wa,  0
Mem:  12302040k total,  6363652k used,  5938388k free,
Swap:  1052248k total,       12k used,  1052236k free,
Now open a new window with: “Ctrl-a” “c”

Your top window is still running you just have to switch back to it.

Switching Between Windows

Command: “Ctrl-a” “n”

Screen allows you to move forward and back. In the example above, you could use “Ctrl-a “n” to get back to top. This command switches you to the next window.

The windows work like a carousel and will loop back around to your first window.

You can create several windows and toggle through them with “Ctrl-a” “n” for the next window or “Ctrl-a” “p” for the previous window.

Each process will keep running until you kill that window.

screen shortcut
screen -wipe
Should clean all dead screen sessions.

List screens:

screen -list
Output:

There is a screen on:
23536.pts-0.wdzee       (10/04/2012 08:40:45 AM)        (Detached)
1 Socket in /var/run/screen/S-root.
Kill screen session:

screen -S 23536 -X quit
