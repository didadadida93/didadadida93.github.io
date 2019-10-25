$(document).ready(() => {

  let date = new Date()
  $("footer p").text(`Created at ${date.getFullYear()}`)

  $("a").on("click", e => {
    if (
      e.currentTarget.attributes.href.value !== "https://github.com/didadadida93" &&
      e.currentTarget.attributes.href.value !== "mailto:didadadida93@gmail.com" &&
      e.currentTarget.attributes.href.value !== "https://github.com/didadadida93/tkpy" &&
      e.currentTarget.attributes.href.value !== "https://github.com/didadadida93/t5apy"
    ) {
      // $.when($(".right-panel-content").fadeToggle(300)).done(() => {
      //   $(e.currentTarget.attributes.href.value).fadeToggle(300)
      // })
      if ($(e.currentTarget.attributes.href.value).is(":visible")) {
        $.when($(e.currentTarget.attributes.href.value).fadeToggle(300)).done(() => {
          $(".right-panel-content").fadeToggle(300)
        })
      } else {
        $.when($(".right-panel-content").fadeToggle(300)).done(() => {
          $(e.currentTarget.attributes.href.value).fadeToggle(300)
        })
      }
    }
  })

  $("button").on("click", e => {
    $.when($(`#${e.currentTarget.attributes.target.value}`).fadeToggle(300)).done(() => {
      $(".right-panel-content").fadeToggle(300)
    })
  })
})
