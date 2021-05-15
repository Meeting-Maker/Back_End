# **Team**

**Ming Chen** - front-end developer, back-end developer, database design, system admin

**Brandon Klassen** - front-end developer, back-end developer, database design

**Stephen Wiebe** - front-end developer

# [**MeetingMaker**](https://www.meetingmaker.ca)

**React, Express, MySQL, AWS**

Front-end wireframes: [Figma](https://www.figma.com/file/HneCp15EqwKI3064FjuijC/meetingmaker)

Database schema: [DBDesigner](https://dbdesigner.page.link/qtrAR5PFpRhqWBDJ8)

MeetingMaker is being developed to simplify the process of scheduling a meeting. Whether the meeting is for two or more, you can easily find the time that works best for everyone. Simply share the link to your meeting and have the attendees input their preferences. View the feature list by release below:

## <u>Release 0.1.0</u>  (May 16th, 2020) (Sprints 1-3)

### **Features:**

- #### Create Meeting by Poll

  - Generate a list of options for attendees to vote on
  - Add a meeting title, description (optional), and response due date
  - Return to the meeting to view the votes at any time

- #### Respond as Guest

  - Add yourself to the meeting as a guest with a custom name, click on a meeting time to cast your vote
  - When returning to the meeting, simply select your name from the list of guests

- ## Comment 

  - Create and delete comments for other attendees to see
  - Can be used for suggestions, vote explanations, or any other important information for future visitors

- #### Edit Meeting

  - As owner, edit your meeting details and vote options

### **Future:**

- #### Intermittent Refresh

  - Intermittently refresh the meeting information to retrieve new meeting details, votes, and comments from others using the site concurrently ***important**

- #### Finalize Meeting

  - Prevent further voting and let visitors know which meeting time was decided on when they revisit

- #### Customize Meeting Options

  - Limit number of votes per guest

- #### Sort Options by Date/Votes

- #### Delete Guest (as owner)

  - Delete guests and their votes from the meetings

- #### System Messaging

  - Important actions are logged as a comment with a description. 
    - "Stephen removed Brandon from the meeting"
    - "Ming deleted their comment"
    - "Stephen removed a vote option with 2 votes (Brandon, Ming)"
  - Can be used for suggestions, vote explanations, or any other important information for future visitors

- #### UI/UX

  - Improve styling, especially on mobile
  - Place instructions on each page to assist the user
  - Introduce more user-friendly terminology and spacing to make use more intuitive
  - Make it evident which guest you are currently 'signed in' as
  - Make it more evident which meetings each guest voted for
  - Introduce pop-ups explaining functionality, especially explaining how to share your meeting
  - Make the page feel more alive by using :hover: styling

- #### Security

  - Sanitize inputs and URL parameters for protection against SQLI, XSS, parameter pollution
  - Disallow use in iFrame for protection against clickjacking
  - Remove ReDoS vulnerabilities by updating or replacing dependencies

### **Bugs:**

- Any guest can delete vote options or edit candidate meetings
- There are currently no cancel buttons when selecting edit, forcing the user to make a change or revisit the meeting
- On meeting edit, the current meeting information does not pre-populate the form
- Create Comment component does not stick to the bottom of the page
- 'meeting' and 'maker' separate by line break, acting unlike a logo
- Many more...

## <u>Release 0.2.0</u>  (future)

### **Features:**

- #### Login

  - Create an account to save your name and easily view a list of previous meetings
  - Write in your availability in your profile, and save your meeting time preferences
  - Return to the meeting to view the votes at any time

- #### Export Meeting to Calendar

  - Export your meeting to another calendar, such as Outlook

- #### Email

  - Receive the meeting file in your email when a time is decided on
  - Receive email notifications when:
    - you are invited to attend a meeting
    - everyone responds to the poll
    - a meeting time is decided

## <u>Release 0.3.0</u>  (future)

### **Features:**

- #### Create Meeting by Common Availability

  - Have attendees input times when they are available or not available
  - Return to the meeting to view the best times for everyone, based on overlap in availability

- #### Teams

  - Create Teams of logged in users to expedite the process, for groups who meet often

# **Scrum**

## Weekly Meetings:

Middle of the week meeting: Thursday OR Friday anytime after 5PM

End of spring meeting: Every Sunday between 3-7PM

## Meeting Dates:

Initiation (21 April 2021)

Plan & Estimate (25 April 2021)

Sprint 1 (27/28 April 2021- 2 May 2021)

Sprint 2 (3 May 2021- 9 May 2021)

Sprint 3 (10 May 2021- 16 May 2021) **Release 0.1.0**
