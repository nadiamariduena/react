<br>

# NODE 🍦

- If you want to start the installation from zero, check if you already have node and if yes uninstall it.

<br>

- Check the version:

```javascript
node --version

```

## Remove it

[How can I completely uninstall nodejs, npm and node in Ubuntu](https://stackoverflow.com/questions/32426601/how-can-i-completely-uninstall-nodejs-npm-and-node-in-ubuntu)

##### This will completely remove nodejs from your system; then you can make a fresh install from the below commands.

<br>

- Read the comments

```javascript
1
sudo apt-get remove nodejs npm node
sudo apt-get purge nodejs
//
//
//
//2
// Now remove .node and .npm folders from your system (CAREFUL, if you already have a lot of data, i will think twice before doing it. save it before)
//
 sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/share/man/man1/node*
sudo rm -rf /usr/local/lib/dtrace/node.d
sudo rm -rf ~/.npm
sudo rm -rf ~/.node-gyp
sudo rm -rf /opt/local/bin/node
sudo rm -rf opt/local/include/node
sudo rm -rf /opt/local/lib/node_modules

sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/include/node*
sudo rm -rf /usr/local/bin/node*
```

##### You can verify your uninstallation by these commands; they should not output anything.

```javascript
which node
which nodejs
which npm
```

<br>
<br>

## BEFORE START

- Lets check this:

#### [Improve application startup speed with preload in-ubuntu](https://itsfoss.com/improve-application-startup-speed-with-preload-in-ubuntu/)

<br>
<br>

# 🍦

# Installing Node.js and npm

#### [Installation of Node.js on Linux](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)

<br>

```javascript
nvm install node
nvm install --lts
```

#### Once the installation is completed, verify it by printing the Node.js version:

```javascript
node --version
```

#### should give this output:

```javascript
v12.8.1 //depends of the version
```

## Npm should also be installed with node, verify it using

```javascript
npm - v;
```

#### should give this output:

```javascript
6.13.4 //depends of the version
```

<br>
<br>
<hr>
<br>
<br>

# GIT 🍨

#### [Installing Git with Apt](https://linuxize.com/post/how-to-install-git-on-ubuntu-18-04/)

<br>

- Start by updating the package index:

```javascript
sudo apt update
```

<br>

- Run the following command to install Git:

```javascript
sudo apt install git
```

<br>

- Verify the installation by typing the following command which will print the Git version:

```javascript
git --version
```

##### More installation options here: [How to Install Git on Ubuntu 18.04](https://linuxize.com/post/how-to-install-git-on-ubuntu-18-04/)

<br>

## GIT CONFIGURATION 🍦

- Now that you have installed Git, go to your repository in Gihub and grab your credentials from there.

<br>

#### You will need:

- your **name** repo, mine is 'nadiamariduena': https://github.com/nadiamariduena

- Your **email** connected to your github account
- And the **password** connected to the account

<br>
<br>

##### The following commands will set your git commit username and email address:

```javascript
git config --global user.name "Your Name"
git config --global user.email "youremail@yourdomain.com"
```

##### To verify the configuration changes, type:

```javascript
git config --list
```

##### Output

```javascript
user.name=Your Name
user.email=youremail@yourdomain.com
```

#### To Edit the .gitconfig from the GNU nano Editor:

```javascript
git config --global -e
```

- **Once you copy paste** that, you will see a window editor, inside the editor you will be able to edit it directly.

<br>

- Once you are done save the changes:

### Save File in Nano

- The **editor** will give you many options, one of these options is **^O(Ctrl + O)**

<br>

> **If you wish to save your current changes** to the file, **press** the ^O (**Ctrl + O**) combination. If you are editing a new file, you will be asked to give that file a name. This will save your current changes and nano will remain opened so you can continue making changes to the file.

<br>

### Save File with Backup

> Sometimes when editing a file, you may want to keep temporary copies of the same file just in case. You can use nano’s -B option, which will create backup of the file you are editing. You can use it in combination with the -C option to tell nano where to save those backups like this:

<br>

### Exit Nano Editor

> To exit nano, simply press ^X (Ctrl +X keys). If the file has not been previously saved, you will be asked to save the changes with yes/no or cancel the exit.

<br>

## CREDITS

##### [How to Install Git on Ubuntu 18.04](https://linuxize.com/post/how-to-install-git-on-ubuntu-18-04/)

##### [A Beginner’s Guide on How to Use Nano Text Editor in Linux](https://www.tecmint.com/learn-nano-text-editor-in-linux/)

##### [How to change my Git username in terminal?](https://stackoverflow.com/questions/22844806/how-to-change-my-git-username-in-terminal)

<br>
<br>
<hr>
<br>
<br>

### ISSUES 🔴

### Git push results in "Authentication Failed"

#### [Reac this: Git push results in "Authentication Failed"](https://stackoverflow.com/questions/17659206/git-push-results-in-authentication-failed)

<br>

### Solution

- Check min 3:26

[How to Fix Git Fatal: Authentication Failed New and Easy Method](https://www.youtube.com/watch?v=uRNIc5AILlI)

<br>
<br>
<hr>

## MISC

[First steps with git: clone, add, commit, push Intro version control git](https://www.earthdatascience.org/workshops/intro-version-control-git/basic-git-commands/)

[Copying a GitHub Repository to Your Local Computer](https://youtu.be/O72FWNeO-xY)

<br>
<br>

# VISUAL STUDIO CODE

##### [Default Keyboard shortcut schemes](https://www.jetbrains.com/help/resharper/Reference__Keyboard_Shortcuts.html#coding_assistance)

##### [20 BEST VSCODE EXTENSIONS TO IMPROVE YOUR PRODUCTIVITY](https://x-team.com/blog/best-vscode-extensions/#git-history)

#### [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

##### [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

##### [MDN Web Docs Glossary: Definitions of Web-related terms](https://developer.mozilla.org/en-US/docs/Glossary)

<br>

<br>

# UBUNTU

#### video [Beginner's Guide to the Bash Terminal](https://youtu.be/oxuRxtrO2Ag)

#### video [The 50 Most Popular Linux & Terminal Commands - Full Course for Beginners](https://www.youtube.com/watch?v=ZtqBQ68cfJc)

<br>
<hr>

#### [The 50 Most Useful Linux Commands To Run in the Terminal](https://www.ubuntupit.com/best-linux-commands-to-run-in-the-terminal/)

#### 1. pwd

pwd stands for Print Work directory and does exactly what you think – it shows the directory you’re currently in. This is one of the handiest Linux terminal commands that aims to make new user’s life peaceful by ensuring they don’t get lost in that seemingly cryptic terminal window.

#### 2. ls

The ls command is probably one of the most widely used commands in the Unix world. It presents to you the contents of a particular directory – both files and directories. You will use this command alongside pwd to navigate your ways inside the mighty Unix filesystem.

#### 3. cd

Short for Change Directory, the cd command is behind your movement from one directory to another. It’s one of the few Linux commands that you’re bound to use throughout your stint with the Linux system. This command makes life in front of the terminal less scary for beginners while providing a standard method to browse the entire filesystem of your device.

#### 4. mkdir

Want to create a new folder through the terminal? The mkdir command is created for just this specific purpose. It lets you create folders anywhere you like in your Linux system – given you have got the necessary permission, of course!

#### 5. rmdir

The arch rival of the mkdir command, the rmdir command allows you to delete specific folders from your system without any hassles. Although many utilize the rm command for this purpose, screwing up parameters or even a single character with rm can do things you wouldn’t even dream. So, stick with rmdir for now.

#### 6. lsblk

Often you will find the need to list the available block devices of your Linux system. The lsblk is one of the most used Linux commands for this purpose. This handy terminal command will present you with a tree structure of your block devices and is used heavily by professional users.

#### 7. mount

Contrary to Windows, whenever you plug in an SD card or a USB, chances are your distro won’t show them directly at the start. You need to mount it with your existing filesystem using the mount command. This Linux command is one of the most powerful terminal commands out there.

#### 8. df

The df command is one of the most empowering Linux terminal commands that display essential information about the disk space on your filesystem. It is used widely by system administrators to monitor and analyze real-time server or network-oriented systems.

#### 44. sort

The sort command is quite compelling at the things it does. Whenever you find the need to sort out a file in an alphabetical or reverse manner, utilize this command.

#### 45. sudo

The sudo command is the holy grail of Linux commands. It lets non-privileged users access and modify files that require low-level permissions. Often you will use this command to access root from your regular user account.

#### 46. chmod

The chmod command is among the most powerful Linux commands you will use to change or modify the access permissions of system files or objects. This command can take a very diverse set of parameters from users and, based on those changes, the file permission.

#### 47. chown

The chown command is very much similar to the chmod command. But instead of changing access permissions, it enables users to change the ownership of a file or directory. Both the chmod and chown terminal commands require root privileges to run.

#### 49. tar

The tar command is used for archiving files and extracting them. It is a very popular command for compressing files and can tackle such tasks very efficiently.

#### visit the site for more commands: [The 50 Most Useful Linux Commands To Run in the Terminal](https://www.ubuntupit.com/best-linux-commands-to-run-in-the-terminal/)

##### [What is the main difference between chmod and chown?](https://askubuntu.com/questions/918379/what-is-the-main-difference-between-chmod-and-chown)

<br>

#### [File Permissions in Linux/Unix: How to Read/Write & Change?](https://www.guru99.com/file-permissions.html)

#### [How to Uninstall Programs from your Ubuntu System](https://vitux.com/how-to-uninstall-programs-from-your-ubuntu-system/)

<br>
<br>

<hr>
