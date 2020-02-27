function createLabel(label) {
	document.querySelector('.js-new-label-name-input').value = label.name;
	document.querySelector('.js-new-label-description-input').value = label.description;
	document.querySelector('.js-new-label-color-input').value = '#' + label.color;
	document.querySelector('.js-details-target ~ .btn-primary').disabled = false;
	document.querySelector('.js-details-target ~ .btn-primary').click();
}

function updateLabel(label) {
	let updatedLabel = false;
	[].slice.call( document.querySelectorAll('.js-labels-list-item')).forEach( element => {
		if (element.querySelector('.js-label-link').textContent.trim() === label.name ) {
			updatedLabel = true;
			element.querySelector('.js-edit-label' ).click();
			element.querySelector('.js-new-label-name-input' ).value = label.name;
			element.querySelector('.js-new-label-description-input' ).value = label.description;
			element.querySelector('.js-new-label-color-input' ).value = '#' + label.color;
			element.querySelector('.js-edit-label-cancel ~ .btn-primary').click();
		}
	});
	return updatedLabel;
}	

function createOrUpdate(label) {
	if (!updateLabel(label)) {
		createLabel(label);
	}
}

[
    // YOUR LABELS JSON HERE

].forEach(label => createOrUpdate(label));