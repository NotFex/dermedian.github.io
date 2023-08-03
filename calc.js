function vergleichen() {
    const selectedBundesland = document.getElementById('bundesland').value;
    const gehalt = parseFloat(document.getElementById('gehalt').value);

    const medianBundesland = getMedian(selectedBundesland); 
    const medianDeutschland = 3646;

    document.getElementById('userGehalt').innerText = gehalt.toFixed(0);
    document.getElementById('medianBundesland').innerText = medianBundesland.toFixed(0);
   // document.getElementById('medianDeutschland').innerText = medianDeutschland.toFixed(0);

    if (gehalt >= medianBundesland) {
        document.getElementById('bvgl').innerText = 'Damit ist dein Gehalt überdurchschnittlich';
    } else {
        document.getElementById('bvgl').innerText = 'Damit ist dein Gehalt unterdurchschnittlich';
    }

    if (gehalt >= medianDeutschland) {
        document.getElementById('dvgl').innerText = 'Dein Gehalt ist Bundesweit über dem Durchschnitt';
    } else {
        document.getElementById('dvgl').innerText = 'Dein Gehalt ist Bundesweit unter dem Durchschnitt';
    }
}

function getMedian(selectedBundesland) { // Quelle ist BafA 2022
    const medianValues = {
        'Baden-Württemberg': 3977,
        'Bayern': 3792,
        'Berlin': 3806,
        'Brandenburg': 3011,
        'Bremen': 3781,
        'Hamburg': 4127,
        'Hessen': 3938,
        'Mecklenburg-Vorpommern': 2935,
        'Niedersachsen': 3488,
        'Nordrhein-Westfalen': 3687,
        'Rheinland-Pfalz': 3570,
        'Saarland': 3621,
        'Sachsen': 3012,
        'Sachsen-Anhalt': 2993,
        'Schleswig-Holstein': 3385,
        'Thüringen': 2945
    };

    return medianValues[selectedBundesland] || 0;
}
