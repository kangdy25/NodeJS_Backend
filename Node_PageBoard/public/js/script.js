// public/js/script.js

$(function(){
    function get2digits (num) {
        return ('0' + num).slice(-2);
    }

    function getDate(dateObj) {
        if(dateObj instanceof Date)
            return dateObj.getFullYear() + '-' + get2digits(dateObj.getMonth()+1)+ '-' + get2digits(dateObj.getDate());
    }

    function getTime(dateObj) {
        if(dateObj instanceof Date)
            return get2digits(dateObj.getHours()) + ':' + get2digits(dateObj.getMinutes())+ ':' + get2digits(dateObj.getSeconds());
    }

    function convertDate(){
        $('[data-date]').each(function(index,element) {
            let dateString = $(element).data('date');
            if(dateString) {
                let date = new Date(dateString);
                $(element).html(getDate(date));
            }
        });
    }

    function convertDateTime() {
        $('[data-date-time]').each(function(index,element) {
            let dateString = $(element).data('date-time');
            if(dateString) {
                let date = new Date(dateString);
                $(element).html(getDate(date)+' '+getTime(date));
            }
        });
    }

    convertDate();
    convertDateTime();
});

$(function(){
    let search = window.location.search; // 1
    let params = {};

    if(search){ // 2
        $.each(search.slice(1).split('&'),function(index,param){
            let index = param.indexOf('=');
            if(index>0){
                let key = param.slice(0,index);
                let value = param.slice(index+1);
    
                if(!params[key]) params[key] = value;
            }
        });
    }
    
    if(params.searchText && params.searchText.length>=3){ // 3
        $('[data-search-highlight]').each(function(index,element){
            let $element = $(element);
            let searchHighlight = $element.data('search-highlight');
            let index = params.searchType.indexOf(searchHighlight);
    
            if(index>=0){
                let decodedSearchText = params.searchText.replace(/\+/g, ' '); //  3-1
                decodedSearchText = decodeURI(decodedSearchText);
            
                let regex = new RegExp(`(${decodedSearchText})`,'ig'); // 3-2
                $element.html($element.html().replace(regex,'<span class="highlighted">$1</span>'));
            }
        });
    }
});

$(function(){
    function resetTitleEllipsisWidth(){
        $('.board-table .title-text').each(function(i,e){
            let $text = $(e);
            let $ellipsis = $(e).closest('.title-ellipsis');
            let $comment = $(e).closest('.title-container').find('.title-comments');
    
            if($comment.length == 0) return;
    
            let textWidth = $text.width();
            let ellipsisWidth = $ellipsis.outerWidth();
            let commentWidth = $comment.outerWidth();
            let padding = 1;
    
            if(ellipsisWidth <= (textWidth+commentWidth+padding)){
            $ellipsis.width(ellipsisWidth-(commentWidth+padding));
            }
            else {
            $ellipsis.width(textWidth+padding);
            }
        });
    }
    $(window).resize(function(){
        $('.board-table .title-ellipsis').css('width','');
        resetTitleEllipsisWidth();
    });
    resetTitleEllipsisWidth();
});