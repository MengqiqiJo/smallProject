// Fill modal with content from link href
$("#myModal").on("show.bs.modal", function(e) {
    var link = $(e.relatedTarget).data('load-url');
    $(this).find(".modal-body").load(link);
});

