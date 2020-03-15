
$('ul.advantages__items').on('click', 'li:not(.advantages__item_active)', function() {
    $(this)
      .addClass('advantages__item_dis').siblings().removeClass('advantages__item_active');
      
      
    //   .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

$('ul.advantages__items').on('click', 'li:not(.advantages__item_active)', function() {
    $(this)
      .addClass('advantages__item_active').siblings().removeClass('advantages__item_active');
      
      
    //   .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});
