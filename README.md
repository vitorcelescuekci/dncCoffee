# DNC Coffee
> Project created to exercise Bootstrap (basic page layout creation) and Javascript concepts (adding "COMPRAR AGORA" button in the cards and display a modal when clicking on these buttons)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)


## General Information
__Why **mouseenter** instead of **mouseover** ?__
`card1.addEventListener("mouseenter", () => {

    card1.innerHTML += "<button class='comprarAgora'>COMPRAR AGORA</button>"
})`

`mouseenter` event does not bubble (propagate up to the document hierarchy), while the `mouseover` propates to the element or one of its child elements.

References:
- https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
- https://www.w3schools.com/jsref/event_onmouseenter.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
- https://www.w3schools.com/jsref/event_onmouseover.asp
- Test here: **https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove_over_enter**

__Why **mouseleave** instead of **mouseout** ?__
`card1.addEventListener("mouseleave", () => {

    card1.removeChild(card1.lastElementChild)
})`

The `mouseleave` event is fired at an Element when the cursor is moved out of it.
`mouseleave` and `mouseout` are similar but differ in that mouseleave does not bubble and mouseout does. This means that **mouseleave** is fired when **the pointer has exited the element and all of its descendants**, whereas **mouseout** is fired when **the pointer leaves the element or leaves one of the element's descendants (even if the pointer is still within the element)**.

References:
- https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
- Test here: **https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove_leave_out**


## Technologies Used
- Bootstrap
- HTML
- CSS
- Javascript

