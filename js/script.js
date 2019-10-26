let main = true

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
    // button always clean all unnecessary element and show ".right-panel-content"
    // so it is like reset button

    // first check all section and make it disappear
    let sections = [...$("section")].filter(section => section.className === "posting")
    sections = [...sections, ...$("#project")]
    sections.forEach(section => {
      if ($(`#${section.id}`).is(":visible")) $(`#${section.id}`).fadeOut(300)
    })

    // then check where this button got clicked and make it disappear
    if ($(e.currentTarget.attributes.target.value).is(":visible")) {
      $(e.currentTarget.attributes.target.value).fadeOut(300, () => {
        $(".right-panel-content").fadeIn(300)
        $("#right-panel .right-panel-content h1")[0].scrollIntoView()
      })
    } else {
      // this element already disappear
      $(".right-panel-content").fadeIn(300)
      $("#right-panel .right-panel-content h1")[0].scrollIntoView()
    }
  })
})
