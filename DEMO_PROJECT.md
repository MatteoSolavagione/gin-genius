# SAFEBAGS - Parti tranquillo, assicura i tuoi bagagli

Safebags è un'applicazione che ti permette di assicurare i tuoi bagagli online, calcolando il costo dell'assicurazione in base al valore dei tuoi beni, il numero di bagagli, la durata del viaggio e il numero di scali.

## Struttura

### homepage

La homepage presenta:

1. L'header con logo e menu di navigazione;
2. Una hero con un breve testo introduttivo e una CTA (pulsante, Call to Action) "Calcola il tuo preventivo adesso" che rimanda ad una pagina per calcolare il preventivo;
3. Una sezione "Come funziona" che, con card animate, spiega il funzionamento dell'app;
4. Un'altra sezione con CTA alla pagina di calcolo e una CTA che manda alle FAQ;
5. Un form per inviare un messaggio;
6. Un footer con informazioni legali e link ai social;

### calcolo del preventivo

La pagina di calcolo del preventivo presenta:

1. Un form con i campi da inserire per calcolare la polizza: numero valigie, valore bagagli, durata del viaggio, numero di scali
2. Pulsante per calcolare il preventivo;
3. Un'area per visualizzare il preventivo calcolato: mostrata tramite manipolazione del DOM via JS.

### faq

La pagina FAQ presenta:

1. Una sezione introduttiva con un breve testo e un'immagine;
2. Un accordion con le domande e le risposte

## Funzionalità

1. Calcolo del preventivo tramite JS;
2. Animazioni CSS per le card della sezione "Come funziona";
3. Animazioni CSS per l'accordion della pagina FAQ;
4. Validazione del form di contatto e validazione del form per il calcolatore di polizza;
5. Gestione interazioni da mobile: toggle del menu di navigazione;
6. Salvataggio dati via localStorage o con fetch API
