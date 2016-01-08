# rails-commits-analysis
A Greasemonkey script that gives you a quick analytical overview of your commits to the Ruby on Rails Project on http://contributors.rubyonrails.org/

Wrote this script a few years back when I was introduced to the Ruby on Rails project and Github. I started contributing to the project and always wanted to see the types of commits fellow contributors were making.

In this script, all the commits are roughly categorised into 4 types:
+ Code commits (Indicated by Pinkish Colour)
+ Documentation commits (Indicated by Yellow Colour)
+ Merge commits (Indicated by Green Colour)
+ Revert commits (Indicated by Red Colour)

Use (Analysis):
------
+ ####Personal Analysis:
Anyone contributing to the project can quickly analyse the type of contributions (commits) he has been making.

+ ####General Analysis:
+ Most contributors at the top of the contributors list usually pushed Code commits and were the ones actually adding new functionality to the project.
+ Most contributors at the bottom of the list were either pushing Documentation commits (typo fixes etc) or trying to fix a particular bug.
+ Merge and Revert commits were usually pushed by a certain set of people (Project owners, maintainers etc).


Example:
------
Let's analyse the commits of none other than David Heinemeier Hansson:

![Alt text] (https://cloud.githubusercontent.com/assets/3154126/12205506/228279ba-b661-11e5-8f31-a293c7cedc7a.png)

A random screenshot showing 4 different types of commits:

![Alt text] (https://cloud.githubusercontent.com/assets/3154126/12205705/38b8b72a-b662-11e5-8d5b-d61692e3ac1f.png)

<b>Assumptions:</b>
------

As per the [Contributing to Ruby on Rails Guide] (http://guides.rubyonrails.org/contributing_to_ruby_on_rails.html):
>To help our CI servers you should add [ci skip] to your documentation commit message to skip build on that commit. Please remember to use it for commits containing only documentation changes.

To ensure strict adherence to the contributing instructions and correct analysis of commits, it is assumed that all Documentation commits do contain [ci skip] in their commit message. Otherwise they may be counted as Code commits.

License:
------
[MIT] (https://github.com/harshadsabne/rails-commits-analysis/blob/master/LICENSE)
