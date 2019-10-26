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
      if (e.currentTarget.attributes.href.value === '#project') {
        if ($(".right-panel-content").is(":visible")) {
          $(".right-panel-content").fadeOut(300, () => {
            $("#project").fadeIn(300)
            $("#project")[0].scrollIntoView()
          })
        } else {
          let section = [...$("section")]
            .filter(section => section.className === "posting")
            .filter(section => $(`#${section.id}`).is(":visible"))

          $(`#${section[0].id}`).fadeOut(300, () => {
            $("#project").fadeIn(300)
            $("#project")[0].scrollIntoView()
          })
        }
      } else {
        $(".right-panel-content").fadeOut(300, () => {
          $(e.currentTarget.attributes.href.value).fadeIn(300)
          $(e.currentTarget.attributes.href.value)[0].scrollIntoView()
        })
      }
    }
  })

  $("button").on("click", e => {
    $(e.currentTarget.attributes.target.value).fadeOut(300, () => {
      $(".right-panel-content").fadeIn(300)
      if ($(`#post-${e.currentTarget.attributes.target.value.slice(1)}`).length === 0) {
        $("#right-panel .right-panel-content h1")[0].scrollIntoView()
      } else {
        $(`#post-${e.currentTarget.attributes.target.value.slice(1)}`)[0].scrollIntoView()
      }
    })
  })
})
