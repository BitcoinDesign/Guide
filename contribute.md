---
layout: guide
title: Contribute
description: Find out how to get involved in Bitcoin design
permalink: /contribute/
main_nav: true
nav_order: 2
main_classes: -no-top-padding
image: /assets/images/contribute/contribute-preview.jpg
---

{% include picture.html
   image = "/assets/images/contribute/contribute.jpg"
   retina = "/assets/images/contribute/contribute@2x.jpg"
   mobile = "/assets/images/contribute/contribute-mobile.jpg"
   mobileRetina = "/assets/images/contribute/contribute-mobile@2x.jpg"
   alt-text = "Pencils and markers"
   width = 1600
   height = 900
   layout = "full-width"
%}

# Contribute

**So you’re interested in contributing? Fantastic! We welcome, appreciate and encourage new contributions.**

Depending on your skills and interest, you can help in a number of ways. We design, illustrate, write copy and code, do technical research, discuss and answer questions, run workshops and community calls, and more. Design is a multidisciplinary activity and there are many different ways to be part of this community and help improve how we interact with the Bitcoin protocol.


## Learn how we work

If you are not familiar with the concepts of open design, we have a [great intro]({{ '/guide/getting-started/open-design/' | relative_url }}) for you. Open, public collaboration gives a lot of freedom to each participant and relies on us organically coming up with the organizational structures we want. The result is that things can sometimes look unorganized or unintuitive from the outside. The big benefit is that you can choose how you want to participate. Let's jump in.

## How to get involved in the community

1. [Join the community on Slack]({{ site.slack_invite_url }}) and say hi in the [#introductions](https://bitcoindesign.slack.com/archives/C0162PV1810) channnel
1. [Subscribe to the newsletter](https://bitcoindesign.substack.com) to stay up-to-date
1. Read up on our [project life cycle](https://github.com/BitcoinDesign/Meta/blob/master/Projects.md)
1. Browse [issues](https://github.com/BitcoinDesign/Meta/issues) for upcoming calls and discussions around processes and coordination
1. Subscribe to our [calendar](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical) for calls and events we organize

## How to get involved in projects

1. See the projects we are either involved in or recommend on the [projects]({{ 'projects' | relative_url }}) page
1. Browse [issues labeled as projects](https://github.com/BitcoinDesign/Meta/issues?q=is%3Aopen+is%3Aissue+label%3Aproject)
2. Browse and post ideas in the [#project-ideas](https://bitcoindesign.slack.com/archives/C0174N5KUF9) Slack channel
1. Contribute to the [Bitcoin Design Guide](https://github.com/BitcoinDesign/Guide)

## Bitcoin Design Guide

- [View the guide]({{ 'guide' | relative_url }})
- Follow progress on the [project board](https://github.com/BitcoinDesign/Guide/projects/1)
- Discuss on the [#bitcoin-design-guide](https://bitcoindesign.slack.com/archives/C015856BDME) Slack channel
- Review code and content on the [github repository](https://github.com/BitcoinDesign/Guide)
- Read the original [project intro](https://docs.google.com/document/d/1YiYeRIybGmxmErCOI4Jc8Qajz3JGM1JYVfUtpzyCzSk/edit?usp=sharing) document
- Watch the [How To Contribute to the Bitcoin Design Guide](https://www.youtube.com/playlist?list=PLPZzDjXV0FTZwILz4uyqiJNjUX-kHWP0k) video series

## Further Slack channels

- [#open-design](https://bitcoindesign.slack.com/archives/C015GFYSJNA)
- [#research](https://bitcoindesign.slack.com/archives/C015DQEPCHJ)
- [#design-review](https://bitcoindesign.slack.com/archives/C019MTNFKL7)
- [#art](https://bitcoindesign.slack.com/archives/C0193ED2HT6)
- [#onboarding](https://bitcoindesign.slack.com/archives/C019PB6GW7M)
- [#private-key-mgmt](https://bitcoindesign.slack.com/archives/C018RATDW82)
- [#payments](https://bitcoindesign.slack.com/archives/C0191UWDHBP)
- [#ux](https://bitcoindesign.slack.com/archives/C016SDP7HT2)

## The Bitcoin Design calendar

Our [calendar](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical) (an .iCal file) includes upcoming calls (community calls, design review calls, etc). Qualified issues are automatically added to the calendar, which you can then subscribe to via your favorite calendar tool.

- Copy this URL: [https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical)
- In Apple Calendar (desktop), use `File -> New calendar subscriptions`
- In Google Calendar (web), click the small `+` icon next to `Other calendars` in the sidebar and select `From URL`
- Paste the URL and save. New events (if there are any scheduled) should show up right away
- In Thunderbird (desktop), `New Calendar` > `On my network` > `iCalendar (ICS)` and paste the [calendar link](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical) in the location field.
- Calendar tools regularly reload subscribed calendars for updates. How often this happens varies by tool

There are two requirements for an issue to be included:

- The issue needs to include a `UTCTime` meta property following this format: `UTCTime: 2020-10-14 9:00 UTC -7`. You can seen an example [here](https://github.com/BitcoinDesign/Meta/issues/27)
- A maintainer needs to add the `call` label to the issue (this prevents spam)
- The calendar auto-updates whenever a new issue is created, or an existing issue is edited
