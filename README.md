# Description:

MeetingMaker is a simple tool where multiple users can input their availability schedule to find overlaps. The idea is to offer a simple way to choose a meeting time, as fast as possible. We think this will be useful for Teams with variable schedules.

# Versions:
### Release 0.1.0 (May 9th, 2021)
##### New Features:
-   Creating a guest event
-   Joining an event as a guest
-   Navigating to an event by URL or /join page
-   Poll feature for deciding meeting time
-   Viewing poll results
-   Removing guest user and their votes from a meeting
-   Comment Feature
-   Editing Candidate Meeting list
-   Editing Meeting Details

### Future Releases
-   Create account and login
-   Find meeting time by common availability
-   User page to view joined meetings
-   Teams with multiple users who often share meetings
-   User rank and permission in Team
-   Email notifications when: invited to team, meeting time is decided, somebody votes on meeting or inputs their time, meeting is happening soon.
-   Saved availability for user profiles which can automatically be applied to meetings.
-   Export decided meeting as an event-file for other calendar softwares.

# Glossary:

Meeting: An event with known or unknown time and variable length. The software’s job is to determine the best time for a meeting.

  

Visitor: Anybody who is using the website.

  

Guest: A visitor who is not logged into an account.

  

User: A visitor who is logged into an account

  

Leader: The creator of a meeting. Can be logged in or not.

  

Team: A group of related users.

  

Member: A user who is a part of a team.

  

Owner: The creator of a team. An owner can assign user permissions for other members of the same team.

# Project Architecture:

![](https://lh6.googleusercontent.com/3h_ZIY9eGtk9EYjIY0NiTQdYHkdzaptf_6FK085xSmZuo5RAKgVgpYkOUSnCGacWln06lJPYXmGz4HTzZHOyK-6DFMij9I0JBECf3VlRj6otdPcySaqtRm1Ja-gTQpKjUIzDHLj2)

## Front End:

Language: JsX, CSS

Framework: React

  

[WireFrame](https://www.figma.com/file/HneCp15EqwKI3064FjuijC/meetingmaker)

## Back End:

Language: Javascript

Framework: Express (NodeJS)

## Database:

MySQL

Schema Link: [https://dbdesigner.page.link/qtrAR5PFpRhqWBDJ8](https://dbdesigner.page.link/qtrAR5PFpRhqWBDJ8)

## Hosting:

This project will be hosted on AWS.

LINK: [https://www.meetingmaker.com](https://www.meetingmaker.ca)

# Scrum:

## Weekly Meetings:

Middle of the week meeting: Thursday OR Friday anytime after 5PM

End of spring meeting: Every Sunday between 3-7PM

## Meeting Dates:

Initiation (21 April 2021)

Plan & Estimate (25 April 2021)

Sprint 1 (27/28 April 2021- 2 May 2021)

Sprint 2 (3 April 2021- 9 May 2021)
