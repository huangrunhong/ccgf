import { Day } from "date-fns";

const de = {
  cancel: "Abbrechen",
  confirm: "Bestätigen",
  upload: "Hochladen",
  delete: "Löschen",
  notification: {
    error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    success: {
      updateProfile: "Profil erfolgreich aktualisiert!",
      updatePassword: "Passwort erfolgreich aktualisiert!",
    },
  },
  common: {
    day: {
      0: "Sonntag",
      1: "Montag",
      2: "Dienstag",
      3: "Mittwoch",
      4: "Donnerstag",
      5: "Freitag",
      6: "Samstag",
    } as Record<Day, string>,
    frequency: {
      "every.week": "Jede Woche",
      "every.two.weeks": "Jede zwei Wochen",
      "every.month": "Jeden Monat",
    },
  },

  editor: {
    heading2: "Überschrift 2",
    heading3: "Überschrift 3",
    heading4: "Überschrift 4",
    bold: "Fett",
    italic: "Kursiv",
    bulletList: "Aufzählungsliste",
    numberedList: "Nummerierte Liste",
    image: "Bild",
    link: "Link",
    enterURL: "URL eingeben",
    setLink: "Link setzen",
  },
  page: {
    home: "Startseite",
    editRegularWorship: "Regelmäßigen Gottesdienst bearbeiten",
    editSpecialWorship: "Sonderlichen Gottesdienst bearbeiten",
    createSpecialWorship: "Temporären Gottesdienst hinzufügen",
    createFellowship: "Gemeinschaft hinzufügen",
    editFellowship: "Gemeinschaft bearbeiten",
    createEvent: "Termin hinzufügen",
    editEvent: "Termin bearbeiten",
    createPost: "Beitrag hinzufügen",
    editPost: "Beitrag bearbeiten",
    dashboard: "Dashboard",
    events: "Termine",
    fellowships: "Gemeinschaft",
    posts: "Beiträge",
    confirmPassword: "Passwort bestätigen",
    forgetPassword: "Passwort vergessen",
    resetPassword: "Passwort zurücksetzen",
    login: "Anmelden",
    register: "Registrieren",
    emailVerification: "E-Mail-Adresse bestätigen",
    profile: "Profil",
    photoLibrary: "Fotogalerie",
  },
  header: {
    events: "Events",
    fellowships: "Gemeinshaften",
    library: "Bibliothek",
    about: "Über uns",
    liveStream: "Liveübertragung",
    donate: "Spenden",
    imprint: "Impressum",
    terms: "Datenschutz",
  },
  admin: {
    menu: {
      church: "Gottesdienste",
      fellowship: "Gemeinschaften",
      event: "Termine",
      post: "Seiten",
      profile: "Profil",
      photoLibrary: "Fotogalerie",
      signOut: "Abmelden",
    },
    fellowships: {
      name: "Name",
      status: "Status",
      description: "Beschreibung",
      location: "Standort",
      schedule: "Zeitplan",
      contact: "Kontakt",
      zoom: "Zoom",
      cover: "Titelbild",
    },
    post: {
      publish: "Veröffentlichen",
      saveDraft: "Als Entwurf speichern",
      status: {
        published: "veröffentlicht",
        draft: "Entwurf",
        archived: "archiviert",
      },
    },
    worships: {
      type: "Typ",
      date: "Datum",
      title: "Titel (optional)",
      description: "Beschreibung (optional)",
      cover: "Titelbild (optional)",
      speaker: "Redner (optional)",
      location: "Standort",
      baptism: "Taufe",
      eucharist: "Eucharistie",
      dinner: "Abendessen",
      regular: "regelmäßiger Gottesdienst",
      special: "sonderlicher Gottesdienst",
    },
    events: {
      date: "Datum (optional)",
      location: "Ort (optional)",
      title: "Titel",
      description: "Beschreibung",
      cover: "Titelbild (optional)",
    },
    posts: {
      title: "Titel",
      content: "Inhalt",
    },
    photoLibrary: {
      info: "Maximale Upload-Dateigröße: 2MB",
      open: "Wählen Sie ein Bild aus der Fotogalerie aus oder laden Sie eine Datei hoch",
      deleteFileModal: {
        header: "Möchten Sie dieses Bild wirklich löschen?",
        info: "Dieses Bild wird sofort gelöscht. Sie können diese Aktion nicht rückgängig machen.",
      },
    },
  },
  profile: {
    updateProfile: {
      header: "Profilinformationen",
      subheader:
        "Aktualisieren Sie die Profilinformationen und die E-Mail-Adresse Ihres Kontos.",
      name: "Name",
      email: "E-mail",
      button: "Profil aktualisieren",
      verifyEmail: {
        info: "Ihre E-Mail-Adresse ist nicht verifiziert.",
        resendVerificationEmail:
          "Klicken Sie hier, um die Verifizierungs-E-Mail erneut zu senden.",
        newVerificationLink:
          "Ein neuer Verifizierungslink wurde an Ihre E-Mail-Adresse gesendet.",
      },
    },
    updatePassword: {
      header: "Passwort aktualisieren",
      subheader:
        "Stellen Sie sicher, dass Ihr Konto ein langes, zufälliges Passwort verwendet, um sicher zu bleiben.",
      currentPassword: "Aktuelles Passwort",
      newPassword: "Neues Passwort",
      confirmPassword: "Passwort bestätigen",
      button: "Passwort aktualisieren",
    },
    deleteAccount: {
      header: "Konto löschen",
      subheader:
        "Sobald Ihr Konto gelöscht ist, werden alle Ressourcen und Daten dauerhaft gelöscht. Laden Sie vor dem Löschen Ihres Kontos alle Daten oder Informationen herunter, die Sie behalten möchten.",
      button: "Konto löschen",
      modal: {
        header: "Möchten Sie Ihr Konto wirklich löschen?",
        info: "Sobald Ihr Konto gelöscht ist, werden alle Ressourcen und Daten dauerhaft gelöscht. Bitte geben Sie Ihr Passwort ein, um zu bestätigen, dass Sie Ihr Konto dauerhaft löschen möchten.",
        password: "Passwort",
      },
    },
  },
  auth: {
    email: "Email",
    password: "Passwort",
    confirmPassword: {
      info: "Dies ist ein sicherer Bereich der Anwendung. Bitte bestätigen Sie Ihr Passwort, bevor Sie fortfahren.",
    },
    forgetPassword: {
      info: "Passwort vergessen? Kein Problem. Teilen Sie uns einfach Ihre E-Mail-Adresse mit und wir senden Ihnen per E-Mail einen Link zum Zurücksetzen des Passworts zu, mit dem Sie ein neues auswählen können.",
      sendLink: "Link zum Zurücksetzen des E-Mail-Passworts senden",
    },
    login: {
      remember: "Angemeldet beleiben",
      forget: "Passwort vergessen?",
      button: "Anmelden",
    },
    register: {
      name: "Name",
      confirmPassword: "Passwort bestätigen",
      alreadyRegistered: "Bereits registriert?",
      button: "Registrieren",
    },
    resetPassword: {
      confirmPassword: "Passwort bestätigen",
      button: "Passwort zurücksetzen",
    },
    verifyEmail: {
      info: "Vielen Dank für Ihre Anmeldung! Bevor Sie beginnen, können Sie Ihre E-Mail-Adresse überprüfen, indem Sie auf den Link klicken, den wir Ihnen gerade per E-Mail zugesandt haben. Wenn Sie die E-Mail nicht erhalten haben, senden wir Ihnen gerne eine neue zu.",
      verificationLink:
        "Ein neuer Bestätigungslink wurde an die E-Mail-Adresse gesendet, die Sie bei der Registrierung angegeben haben.",
      resendEmail: "Bestätigungs-E-Mail erneut senden",
      logout: "Abmelden",
    },
  },
};

export default de;
