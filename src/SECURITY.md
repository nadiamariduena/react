# HIDE THE .ENV 🔴

#### You have to do this in the beginning as if you have already pushed in branches etc, you will have to do it one by one, (you can just create a new api key in whatever you are working)

<br>

##### [Why do people put the .env into gitignore?](https://stackoverflow.com/questions/43664565/why-do-people-put-the-env-into-gitignore/43664611)

## Steps

- create a file **.gitignore** in your root directory (outside public, node_modules and the src folder)
- create a **.env** file (where you will store all the key and sensitive data)
- Add **.env** file inside .gitignore folder like so:

##### The following will be hidden from github

```javascript
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

#### After that You must untrack the .env file from git using:

```javascript
git rm --cached .env
```

#### and following that use 1. 2. git commit -m " " 3. git push -u origin master . Now your .env file is remove from github repo.

```javascript
// 1
git add .
// 2
git commit -m "updating the .gitignore changes"
// 3
git push -u origin master //or just: git push
```

#### Now your .env file is removed from github repo, but as i said, if you already had it pushed, you will have to check it everywhere

<br>
<br>

# If the problem persist

### Start by deleting it

- REMOVE the .env from vs then github

```javascript
git rm -f .env
```

<br>

[Unable to git-ignore .env file in laravel?](https://stackoverflow.com/questions/54821174/unable-to-git-ignore-env-file-in-laravel)

<br>
<br>

- then push the changes so that its removed from the repo in git too

```javascript
// 1
git add .
// 2
git commit -m "updating the .gitignore changes"
// 3
git push -u origin master //or just: git push
```

### now check that your .gitignore (in that block) looks like this:

```javascript


# misc
.DS_Store
.env   //important --------------- **
.env.local
.env.development.local
.env.test.local
.env.production.local
```

#### now add this again

```javascript
git rm --cached .env
```

##### if you get this:

```javascript
fatal: pathspec '.env' did not match any files

```

- its because it has been already deleted, so now you can add this:

## Steps

- create a file **.gitignore** in your root directory (outside public, node_modules and the src folder)
- create a **.env** file (where you will store all the key and sensitive data)
- Add **.env** file inside .gitignore folder

### ⚠️ the whole issue is because we didnt add the .env inside the gitignore, and the .env.local isnt enough

<br>

#### and following that use 1. 2. git commit -m " " 3. git push -u origin master . Now your .env file is remove from github repo.

```javascript
// 1
git add .
// 2
git commit -m "updating the .gitignore changes"
// 3
git push -u origin master //or just: git push
```

<br>

# The reason 🐒

> **Commercejs** will have the data of your store/clients etc and **stripe** will have the credit cards / payments data, so you don't want this data exposed to malicious beings right?

<br>

### interesting links

#### [How to hide .env file from Github](https://stackoverflow.com/questions/30696930/how-to-hide-env-file-from-github)

#### [Should I add .env to .gitignore?](https://salferrarello.com/add-env-to-gitignore/)

<br>
<br>

## READ THE [onlyStripe](../src/onlyStripe.md) section

#### ⚠️ You should never ever Publish this type of sensitive data (keys) or the data that is inside the .env folder, thats why i decided to make this repository private until the project was ready, so that i could replace the sensitive data that i already "commited to git".

- You can either hide the repo and publish just the code **(without the keys of course)** but by doing that you will lose all the commitments.

<br>

#### [Should I add .env to .gitignore?](https://salferrarello.com/add-env-to-gitignore/)

- Yes there is a **way to replace it but it s hard, in case you already pushed in several branches**, it s easier to just create a new shop in commercejs and stripe to obtain **new keys** to use in a new repo (**of course you will have to delete the old shop so to make the old keys obsolete**)

<br>
<br>

<br>

### Now that we have the key, we are not going to add it here below:

- Because as we said, **its sensitive data**

```javascript
// PaymentForm.jsx
//
//STRIPE 2
const stripePromise = loadStripe("...");
```

<br>

### We are going to add the key inside the .env
