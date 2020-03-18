//***


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
    {
        "name": "0.5",
        "description": "Issue d'un poids de 0.5",
        "color": "ffc0cb"
    },
    {
        "name": "1",
        "description": "Issue d'un poids de 1",
        "color": "c8f0f0"
    },
    {
        "name": "2",
        "description": "Issue d'un poids de 2",
        "color": "c8c800"
    },
    {
        "name": "3",
        "description": "Issue d'un poids de 3",
        "color": "ffae19"
    },
    {
        "name": "5",
        "description": "Issue d'un poids de 5",
        "color": "1d76db"
    },
    {
        "name": "8",
        "description": "Issue d'un poids de 8",
        "color": "dda0dd"
    },
    {
        "name": "12",
        "description": "Issue d'un poids de 12",
        "color": "c8c8c8"
    },
    {
        "name": "20",
        "description": "Issue d'un poids de 20",
        "color": "000000"
    },
    {
        "name": "adding",
        "description": "Ajout d'une fonctionnalités",
        "color": "74cc41"
    },
    {
        "name": "bug",
        "description": "Écart mineur à corriger",
        "color": "fbca04"
    },
    {
        "name": "crash",
        "description": "Un problème fait s’arrêter l'application",
        "color": "cd0000"
    },
    {
        "name": "documentation",
        "description": "New feature or request",
        "color": "a2eeef"
    }
].forEach(label => createOrUpdate(label));


//***
