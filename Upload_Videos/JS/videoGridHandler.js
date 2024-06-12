$(document).ready(function () {
  $(".video-grid").click(function () {
    var videoSrc = $(this).data("video-src");
    $(".video-grid").not($(this)).hide();
    $(this).replaceWith(`<div class="video-player" style="margin-left:140px; margin-top:70px;">
      <button id="exitBtn" class="btn btn-danger" style="position:absolute; left:950px; top:115px;"><i class="fas fa-times"></i></button>
      <iframe width="800" height="350" src="${videoSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`);
  });

  $(document).on("click", "#exitBtn", function () {
    $(".video-player").fadeOut(function () {
      $("#fade-element").fadeIn();
      $(this).hide();
      $(".existing-video").show();
      alert("Thank you for watching!");
    });
  });
});
