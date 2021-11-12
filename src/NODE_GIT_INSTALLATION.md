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

[20 BEST VSCODE EXTENSIONS TO IMPROVE YOUR PRODUCTIVITY](https://x-team.com/blog/best-vscode-extensions/#git-history)
