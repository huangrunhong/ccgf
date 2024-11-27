import { Day } from "date-fns";

const en = {
  cancel: "Cancel",
  confirm: "Confirm",
  upload: "Upload",
  delete: "Delete",
  common: {
    day: {
      0: "Monday",
      1: "Tuesday",
      2: "Wednesday",
      3: "Thursday",
      4: "Friday",
      5: "Saturday",
      6: "Sunday",
    } as Record<Day, string>,
    frequency: {
      1: "Every",
      2: "Every other",
    },
  },
  editor: {
    heading2: "Heading 2",
    heading3: "Heading 3",
    heading4: "Heading 4",
    bold: "Bold",
    italic: "Italic",
    bulletList: "Bullet List",
    numberedList: "Numbered List",
    image: "Image",
    link: "Link",
    enterURL: "Enter URL",
    setLink: "Set Link",
  },
  page: {
    home: "Home",
    editRegularWorship: "Edit regular Worship",
    editSpecialWorship: "Edit special Worship",
    createSpecialWorship: "Create special Worship",
    createFellowship: "Create Fellowship",
    editFellowship: "Edit Fellowship",
    createEvent: "Create Event",
    editEvent: "Edit Event",
    createPost: "Create Page",
    editPost: "Edit Page",
    dashboard: "Dashboard",
    events: "Events",
    fellowships: "Fellowships",
    posts: "Posts",
    confirmPassword: "Confirm Password",
    forgetPassword: "Forget Password",
    resetPassword: "Reset Password",
    login: "Login",
    register: "Register",
    emailVerification: "Email Verification",
    profile: "Profile",
    photoLibrary: "Photo Library",
  },
  home: {
    welcome: "Welcome to",
    heading: "Chinese Christian Community Frankfurt",
    subheading:
      "Looking forward to 2024, we will learn to obey God together and make our church a church where God is present. If God is with us, the church will be revived, the church will be blessed, the church will have power, the church will be guided, and the church will experience God. Are you also willing to let God take the first place, satisfy the Lord's heart, and let God be glorified? Let us build the church together and prosper the family of God.",
    worship: {
      heading: "Worship",
      schedule: "Every Sunday",
      sunday: "Sunday",
      description:
        "The church's Sunday worship now adopts a dual-track system of online and offline. Brothers and sisters and friends are welcome to participate in our physical or online Sunday worship.",
      sermon: "Sermon",
      baptism: "Baptism",
      eucharist: "Eucharist",
      dinner: "Dinner",
      video: "Sermon Video",
    },
    events: "News & Events",
    fellowships: {
      heading: "Fellowships",
    },
  },
  header: {
    events: "Events",
    fellowships: "Fellowships",
    library: "Library",
    about: "About",
    liveStream: "Live Stream",
    donate: "Donate",
    imprint: "Imprint",
    terms: "Terms",
  },
  admin: {
    menu: {
      church: "Worships",
      fellowship: "Fellowships",
      event: "Events",
      post: "Posts",
      profile: "Profile",
      photoLibrary: "Photo Library",
      signOut: "Sign out",
    },
    fellowships: {
      name: "Name",
      status: "Status",
      description: "Description",
      location: "Location",
      schedule: "Schedule",
      contact: "Contact",
      zoom: "Zoom",
      cover: "Cover photo",
    },
    post: {
      publish: "Publish",
      saveDraft: "Save as Draft",
      status: {
        published: "Published",
        draft: "Draft",
        archived: "Archived",
      },
    },
    worships: {
      type: "Type",
      date: "Date",
      title: "Title (optional)",
      location: "Location",
      baptism: "Baptism",
      eucharist: "Eucharist",
      dinner: "Dinner",
      regular: "Regular worship",
      special: "Special worship",
    },
    events: {
      date: "Date",
      location: "Location",
      title: "Title",
      description: "Description",
      cover: "Cover photo",
    },
    posts: {
      title: "Title",
      content: "Content",
    },
    photoLibrary: {
      info: "Maximum upload file size: 2MB",
      open: "Select an image from the photo library or upload a file",
      deleteFileModal: {
        header: "Are you sure you want to delete this image",
        info: "This item will be deleted immediately. You can't undo this action.",
      },
    },
  },
  profile: {
    updateProfile: {
      header: "Profile Information",
      subheader: "Update your account's profile information and email address.",
      name: "Name",
      email: "Email",
      button: "Update profile",
      verifyEmail: {
        info: "Your email address is unverified.",
        resendVerificationEmail:
          "Click here to re-send the verification email.",
        newVerificationLink:
          "A new verification link has been sent to your email address.",
      },
    },
    updatePassword: {
      header: "Update Password",
      subheader:
        "Ensure your account is using a long, random password to stay secure.",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      button: "Update password",
    },
    deleteAccount: {
      header: "Delete Account",
      subheader:
        "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.",
      button: "Delete account",
      modal: {
        header: "Are you sure you want to delete your account?",
        info: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.",
        password: "Password",
      },
    },
  },
  auth: {
    email: "Email",
    password: "Password",
    confirmPassword: {
      info: "This is a secure area of the application. Please confirm your password before continuing.",
    },
    forgetPassword: {
      info: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.",
      sendLink: " Send Email Password Reset Link",
    },
    login: {
      remember: "Remember me",
      forget: "Forgot your password?",
      button: "Log in",
    },
    register: {
      name: "Name",
      confirmPassword: "Confirm Password",
      alreadyRegistered: "Already registered?",
      button: "Register",
    },
    resetPassword: {
      confirmPassword: "Confirm Password",
      button: "Reset Password",
    },
    verifyEmail: {
      info: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.",
      verificationLink:
        "A new verification link has been sent to the email address you provided during registration.",
      resendEmail: "Resend Verification Email",
      logout: "Log Out",
    },
  },
};

export default en;
