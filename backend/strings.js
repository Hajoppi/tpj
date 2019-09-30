module.exports = {
  fi: {
    signupCreate: {
      subject: 'Tervetuloa 147. Teekkariperinnejuhlaan',
      paragraphs: [
          'Kiitos ilmoittautumisesta ja tervetuloa juhlistamaan 147-vuotiasta teekkariutta Teekkariperinnejuhlaan!',
          'Juhla järjestetään Dipolissa (Otakaari 24, 02150, Espoo) perjantaina 8.11. Saapuminen juhlaan tapahtuu Juhlaovien kautta. Paikalle voi saapua klo 18:00 lähtien ja kaikkia juhlijoita pyydetään saapumaan viimeistään 18:30 mennessä.',
          'Pääjuhlan jälkeen on bussikuljetus jatkoille Dipolin edestä.',
          'Juhlien pukukoodi on juhlapuku akateemisin kunniamerkein. Luvassa on suuret juhlat, joten varaathan mukaan myös iloista juhlamieltä sekä käteistä.',
          'Ilmoittautuminen Teekkarisillikselle 9.11. tapahtuu ensisijaisesti Teekkariperinnejuhlaan ilmoittautumisen yhteydessä. Mahdollisesta lisälipunmyynnistä tiedotetaan erikseen.',
          'Ilmoittauduit Teekkariperinnejuhlaan seuraavin tiedoin:',
          '{signupDetails}',
          'Voit muokata tietojasi ilmoittautumisen sulkeutumiseen mennessä osoitteessa {modifyLink}',
          'Maksutiedot löydät alempaa.',
          'Saaja: Aalto-yliopiston ylioppilaskunta\nTili: FI78 3131 1001 1779 34\nSwift/BIC: HANDFIHH\nSumma: {signupPrice}€\nEräpäivä: 24.10.2019\nViite: 11824',
          'Olettehan maksuihin liittyvissä asioissa suoraan yhteydessä tuottajaamme Eeva Ylimäkeen, eeva.ylimaki@ayy.fi.',
          'Nähdään juhlassa!\n',
          'Ystävällisin terveisin,\n\nAnni Parkkila\n\nTeekkariperinnetirehtööri\nTeekkarijaosto, Aalto-yliopiston ylioppilaskunta\nanni.parkkila@ayy.fi'
      ]
    },
    signupUpdate: {
      prepend: ['Päivitit tietosi. Tässä uudet ilmoittautumistietosi']
    },
    signupDetailsTemplate: [
      'Nimi: {name}',
      'Sähköposti: {email}',
      'Opiskelujen aloitusvuosi: {start_year}',
      'Olen opiskelija: {student}',
      'Avecin nimi: {avec}',
      'Menu vaihtoehdot: {dish}',
      'Ruoka-aineallergiat sekä erityisruokavaliot: {food_requirements}',
      'Pöytäseurue: {table_group}',
      'Alkoholiton: {no_alcohol}',
      'Edustamani taho: {representative_of}',
      'Ilmoittaudun sillikselle 9.11.2019 (+20€): {sillis}',
      'Haluan ostaa kannatuslipun (147€): {support}',
    ],
    booleans: ['Kyllä', 'Ei']
  },
  en: {
    signupCreate: {
      subject: 'Welcome to the 147th Teekkaritraditionparty',
      paragraphs: [
          'Thank you for the sign up and welcome to celebrate the 147th Teekkaritraditionball!',
          'The event will be held in Dipoli (Otakaari 24, 02150, Espoo) on Friday 8th November. Arrival to the venue will be done through Juhlaovi on the east side of Dipoli. Arrival to Dipoli is possible from 6 pm onwards and we kindly request the guests to arrive by 6:30 pm.',
          'There will be a bus transportation to the afterparty after the main celebration.',
          'Dresscode for the ball is white tie with academic decorations. The event will be pretty crowded so remember to have a good time and bring also some cash with you.',
          'The sign up for Teekkarisillis (brunch) on the next day is primarily done along with the sign up for the Teekkaritraditionball. We will inform if there will be any additional sign up for the Teekkarisillis later.',
          'You signed up to Teekkaritraditionparty with the following information:',
          '{signupDetails}',
          'You can modify your information until the end of the signup from this link: {modifyLink}',
          'The payment details are attached below.',
          'Recipient: Aalto-yliopiston ylioppilaskunta\nAccount: FI78 3131 1001 1779 34\nSwift/BIC: HANDFIHH\nSum: {signupPrice}€\nDue date: 24.10.2019\nReference number: 11824',
          'If you have any payment related questions, please contact our producer Eeva Ylimäki directly, eeva.ylimaki@ayy.fi.',
          'See you at the party!\n',
          'Best regards,\n\nAnni Parkkila\n\nDirector of Teekkari traditions\nTeekkari Section, Aalto University Student Union\nanni.parkkila@ayy.fi'
      ]
    },
    signupUpdate: {
      prepend: ['You have updated your info. Here are your new registration details.']
    },
    signupDetailsTemplate: [
      'Name: {name}',
      'Email: {email}',
      'Freshman year: {start_year}',
      'I am a student: {student}',
      'Name of avec: {avec}',
      'Menu options: {dish}',
      'Food allergies and special diet: {food_requirements}',
      'Non-alcoholic: {no_alcohol}',
      'Seating preferences: {table_group}',
      'Representative of: {representative_of}',
      'I participate in sillis brunch on 9th of November (+20€): {sillis}',
      'I want to buy a support ticket (147€): {support}',
    ],
    booleans: ['Yes', 'No']
  },
  se: {
    signupCreate: {
      subject: 'Välkommen till 147e Teknologtraditionsfesten',
      paragraphs: [
          'Tack för anmälan och välkommen att fira 147-årig teknologskapet i Teknologtraditionsfest!',
          'Fest ordnas i Dipoli (Otsvängen 24, 01250, Esbo) på fredagen den 8 November. Man kommer till Dipoli via Festdörren. Man kan komma från och med kl 18:00 och alla gäster bör komma senast kl 18:30. ',
          'Efter banketten bussar till efterfestplatsen avgår utanför Dipoli.',
          'Klädsel i festen är högtidsdräkt med akademiska hederstecken. Festen kommer att bli stora, var så god och ta med både glad festandan och kontant.',
          'Anmälningen till Teekkarisillis på den 9 November sker för det första via anmälningen till Teknologtraditionsfest anmälan. Om biljetter blir kvar, där ska vara en avskildt meddelande.',
          'You signed up to Teekkaritraditionparty with the following information:',
          '{signupDetails}',
          'Du kan ändra din information tills registreringen slutar från den här länken: {modifyLink}',
          'Betalninginformation hittar du nedre.',
          'Betalningsmottagare: Aalto-yliopiston ylioppilaskunta\nKonto: FI78 3131 1001 1779 34\nSwift/BIC: HANDFIHH\nMängd: {signupPrice}€\nFörfallodag: 24.10.2019\nRef.n: 11824',
          'Om du har fårgor om betalningen, ta konkat med vår producent Eeva Ylimäki. eeva.ylimaki@ayy.fi.',
          'Vi ses på festen!\n',
          'Med vänliga hälsning,\n\nAnni Parkkila\n\nTeknologtraditionsdirektör\nTeknologsektionen, Aalto-universitetets studentkår\nanni.parkkila@ayy.fi'
      ]
    },
    signupUpdate: {
      prepend: ['Du har uppdaterat din information. Här är dina nya registreringsinformation.']
    },
    signupDetailsTemplate: [
      'Namn: {name}',
      'E-post: {email}',
      'Phuxåret: {start_year}',
      'Studerande: {student}',
      'Avecs: namn {avec}',
      'Menu alternativer: {dish}',
      'Matallergi och specialdieter: {food_requirements}',
      'Alkoholfri: {no_alcohol}',
      'Bordsällskapet: {table_group}',
      'Jap representerar: {representative_of}',
      'Jag deltar i sillfrukost den 9 November (+20€): {sillis}',
      'Jag vill köpa en stödbiljett (147€): {support}',
    ],
    booleans: ['Ja', 'Nej']
  }
};