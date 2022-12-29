const options = {
    readAloudOptions: {
        autoplay: true,
        voice: 'female',
        speed: 1.5
    },
    translationOptions: {
        language: 'fr-FR',
        autoEnableDocumentTranslation: true
    },
    displayOptions: {
        textSize: 20,
        increaseSpacing: true
    }
};

ImmersiveReader.launchAsync(YOUR_TOKEN, YOUR_SUBDOMAIN, data, YOUR_OPTIONS);