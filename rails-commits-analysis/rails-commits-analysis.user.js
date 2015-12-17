// ==UserScript==
// @name            Rails commits analysis
// @author          Harshad Sabne
// @namespace       rails-commits-analysis
// @description     Gives you a quick analytical overview of your commits to the Ruby on Rails Project on http://contributors.rubyonrails.org/
// @include         http://contributors.rubyonrails.org/*/commits
// @domain          http://contributors.rubyonrails.org/
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version         1
// @grant           none
// @contributionURL https://github.com/harshadsabne/rails-commits-analysis
// ==/UserScript==


this.$ = this.jQuery = jQuery.noConflict(true);
//$(document).ready(function()
$(window).load(function()
{
   //setTimeout(function(){
   var docCount = ( $("td.commit-message:contains('[ci skip]')").not(":contains('Revert')").length );
   var mergeCount = ( $("td.commit-message:contains('Merge')").not(":contains('Revert')").length );
   var revertCount = ( $("td.commit-message:contains('Revert')").length );
   var codeCount = ($( "td.commit-message").not(":contains('Revert')").not(":contains('Merge')").not(":contains('[ci skip]')").length);
   
   var totalCount = docCount+mergeCount+revertCount+codeCount;
   
   var docPercent = (docCount/totalCount) * 100;
   var mergePercent = (mergeCount/totalCount) * 100;
   var revertPercent = (revertCount/totalCount) * 100;
   var codePercent = (codeCount/totalCount) * 100;
   
   
   $("span.listing-total").append(" :-</br>[ "+docCount+ " Documentation commits ("+docPercent.toFixed(2)+"%),</br> "+mergeCount+ " Merge commits ("+mergePercent.toFixed(2)+"%),</br> "+revertCount+ " Revert commits ("+revertPercent.toFixed(2)+"%),</br> "+codeCount+ " Code commits ("+codePercent.toFixed(2)+"%) ]");
    $( "td.commit-message:contains('[ci skip]')").not(":contains('Revert')" ).css({"text-decoration":"underline" , "background-color":"#FFFF99"}).prepend("<b>Doc commit:</b> ");
    $( "td.commit-message:contains('Merge')").not(":contains('Revert')").css({"text-decoration":"underline" , "background-color":"#33FF99"}).prepend("<b>Merge commit:</b> ");
    $( "td.commit-message:contains('Revert')" ).css({"text-decoration":"underline" , "background-color":"#FF6666"}).prepend("<b>Revert Commit:</b> ");
    $( "td.commit-message").not(":contains('Revert')").not(":contains('Merge')").not(":contains('[ci skip]')").css({"text-decoration":"underline" , "background-color":"#FFCCFF"}).prepend("<b>Code commit:</b> ");
   //}, 500);
});

