$(document).ready(function () {
  $("#addVideoBtn").click(function () {
    $(".fade-element").not("#navbar").fadeOut();
    $("#videoForm").fadeIn();
  });

  $("#submitVideoBtn").click(function () {
    let thumbnailFile = $("#thumbnailFile")[0].files[0];
    let videoTitle = $("#videoTitle").val();
    let videoLink = $("#videoLink").val();

    let reader = new FileReader();
    reader.onload = function (event) {
      let thumbnailURL = event.target.result;
      let newVideoHTML = `
      <div class="video-grid" data-video-src="${videoLink}">
        <div class="video-row1">
          <img src="${thumbnailURL}">
        </div>
        <div class="video-row2">
          <div class="video-content">
            <div class="video-title">
              ${videoTitle}
            </div>
          </div>
        </div>
      </div>`;

      $("main").append(newVideoHTML);

      $("#thumbnailFile").val("");
      $("#videoTitle").val("");
      $("#videoLink").val("");

      $("#videoForm").fadeOut();

      $("#fade-element").not("#navbar").fadeIn();
    };
    reader.readAsDataURL(thumbnailFile);
  });
});
