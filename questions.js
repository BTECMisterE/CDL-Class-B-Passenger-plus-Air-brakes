/* ============================================================
   CDL STUDY — QUESTION BANK
   Class B • Passenger (P) Endorsement • Air Brakes • General Knowledge
   Sources: AAMVA / FMCSA model CDL manual.
   Always verify against your own state's CDL handbook.
   Each question: { q, choices[], answer (index), why }
   ============================================================ */

const QUESTION_BANK = {
  general: {
    title: "General Knowledge",
    blurb: "The core written test required for every CDL class.",
    questions: [
      { q: "Total stopping distance is made up of which three parts?",
        choices: ["Perception distance, reaction distance, braking distance", "Sight distance, brake lag, skid distance", "Following distance, gap distance, stop distance", "Speed, weight, and road condition"],
        answer: 0,
        why: "Total stopping distance = perception distance + reaction distance + braking distance." },

      { q: "At 55 mph on dry pavement, roughly how far will a heavy vehicle travel before it can stop?",
        choices: ["About 60 feet", "About the length of a football field (~300 feet)", "About 1,000 feet", "About 100 feet"],
        answer: 1,
        why: "At 55 mph it takes about 6 seconds and roughly 300 feet — the length of a football field — to stop." },

      { q: "How far ahead should a commercial driver normally look while driving?",
        choices: ["Just past the hood", "12 to 15 seconds ahead", "About 2 seconds ahead", "As far as the headlights reach only"],
        answer: 1,
        why: "Look 12–15 seconds ahead — about a quarter mile at highway speed, or one city block in town." },

      { q: "What is the basic rule for safe following distance under 40 mph?",
        choices: ["2 seconds total", "One second for every 10 feet of vehicle length", "Three car lengths", "One second for the whole vehicle"],
        answer: 1,
        why: "Allow 1 second for each 10 ft of vehicle length under 40 mph; add 1 more second above 40 mph." },

      { q: "Empty trucks generally require:",
        choices: ["Shorter stopping distances", "Longer stopping distances than when loaded", "No change in stopping distance", "Less following distance"],
        answer: 1,
        why: "Empty trucks have less traction (the brakes/tires are designed for a load), so they can take longer to stop and bounce." },

      { q: "Hydroplaning can begin at speeds as low as:",
        choices: ["10 mph", "30 mph", "55 mph", "70 mph"],
        answer: 1,
        why: "With enough water on the road, hydroplaning can start around 30 mph." },

      { q: "If your vehicle starts to hydroplane, you should:",
        choices: ["Brake hard immediately", "Release the accelerator and push in the clutch", "Accelerate to regain traction", "Turn sharply"],
        answer: 1,
        why: "Ease off the gas (and push the clutch) and keep the wheel steady; don't brake hard." },

      { q: "When driving at night you must dim your high beams within how many feet of an oncoming vehicle?",
        choices: ["200 feet", "300 feet", "500 feet", "1,000 feet"],
        answer: 2,
        why: "Dim high beams within 500 ft of an oncoming vehicle and within 300 ft when following another vehicle." },

      { q: "Brake fade is most often caused by:",
        choices: ["Cold brakes", "Excessive use / overheating of the brakes", "Low air pressure", "New brake linings"],
        answer: 1,
        why: "Brakes can fade when overused and overheated, such as on a long downgrade. Use proper low gear and engine braking." },

      { q: "The proper way to go down a long, steep downgrade is to:",
        choices: ["Coast in neutral", "Select a low gear before starting down and brake lightly", "Ride the brakes the whole way", "Use the parking brake to slow down"],
        answer: 1,
        why: "Pick a safe low gear BEFORE the grade, then use light, steady (or snub) braking and engine braking." },

      { q: "Black ice is dangerous because:",
        choices: ["It is bright white and easy to see", "It is a thin, clear layer that makes the road look just wet", "It only forms on bridges", "It melts quickly"],
        answer: 1,
        why: "Black ice is a thin clear layer — the road merely looks wet. Watch for it in cold weather, especially on bridges." },

      { q: "The minimum tread depth for FRONT (steering) tires is:",
        choices: ["2/32 inch", "4/32 inch", "1/32 inch", "6/32 inch"],
        answer: 1,
        why: "Steering tires need at least 4/32 inch of tread; other tires need at least 2/32 inch." },

      { q: "Tire air pressure should be checked:",
        choices: ["By kicking the tire", "With a gauge when the tires are cool", "Only when a tire looks low", "After driving 50 miles"],
        answer: 1,
        why: "Use a tire pressure gauge; check when tires are cool for an accurate reading." },

      { q: "When making a right turn with a large vehicle, you should:",
        choices: ["Swing wide to the left before turning", "Turn wide as you complete the turn, keeping the rear close to the curb", "Turn as sharply as possible", "Speed up through the turn"],
        answer: 1,
        why: "Keep the rear of the vehicle close to the curb to stop others from passing on your right; turn wide only as you complete the turn." },

      { q: "When you must back a vehicle, the safest method is to back:",
        choices: ["Toward the right (blind) side", "Toward the driver's side, slowly, using a helper if possible", "Quickly to get it over with", "Without mirrors"],
        answer: 1,
        why: "Back toward the driver's side so you can see, go slowly, and use a helper to watch your blind spots." },

      { q: "The legal blood alcohol concentration (BAC) limit for a CDL driver operating a CMV is:",
        choices: ["0.08", "0.04", "0.10", "0.02"],
        answer: 1,
        why: "A CDL driver is considered intoxicated at 0.04 BAC — half the limit for regular drivers." },

      { q: "What is the most important reason for doing a pre-trip inspection?",
        choices: ["It is required paperwork only", "Safety — finding problems before they cause a crash or breakdown", "To warm up the engine", "To pass time"],
        answer: 1,
        why: "Inspections find safety problems that could cause a crash or leave you stranded." },

      { q: "On a slippery road you should:",
        choices: ["Drive normally", "Slow down, increase following distance, and take curves gently", "Brake hard in curves", "Follow closely to draft"],
        answer: 1,
        why: "Reduce speed, increase your following distance, and avoid hard braking or steering on slick roads." },

      { q: "If your vehicle goes into a front-wheel skid, it will:",
        choices: ["Spin around", "Go straight ahead even if you steer", "Stop instantly", "Tip over"],
        answer: 1,
        why: "In a front-wheel skid the truck keeps going straight no matter how you steer; ease off the accelerator and let the wheels regain grip." },

      { q: "To correct a drive-wheel (rear) braking skid, you should:",
        choices: ["Brake harder", "Stop braking, turn the wheel in the direction you want to go, then countersteer", "Accelerate hard", "Shift to neutral and coast"],
        answer: 1,
        why: "Release the brakes to let the wheels roll, steer in the desired direction, and be ready to countersteer as the truck straightens." },

      { q: "Cargo on a flatbed or in a trailer should be checked:",
        choices: ["Only before the trip", "Within the first 50 miles, then every 150 miles or 3 hours", "Once a day", "Never while driving"],
        answer: 1,
        why: "Inspect cargo securement within the first 50 miles and again every 150 miles or 3 hours (or whenever you stop)." },

      { q: "How many tie-downs are required at minimum for cargo, and how often?",
        choices: ["One tie-down total", "At least 2 tie-downs, and at least 1 for every 10 feet of cargo", "One every 20 feet", "No minimum"],
        answer: 1,
        why: "Use at least one tie-down per 10 ft of cargo, with a minimum of two tie-downs." },

      { q: "The best way to communicate your intention to other drivers is to:",
        choices: ["Flash your high beams repeatedly", "Use turn signals early and tap the horn or use flashers when needed", "Wave your arm", "Speed up"],
        answer: 1,
        why: "Signal early, use flashers if you slow/stop, and a light tap of the horn can alert others to your presence." },

      { q: "Stopping distances increase the most with:",
        choices: ["Higher speed and heavier weight", "A clean windshield", "New tires", "Daylight"],
        answer: 0,
        why: "Braking distance increases dramatically with speed (roughly with the square of speed) and with weight." },

      { q: "If you double your speed (e.g. from 20 to 40 mph), your braking distance is about:",
        choices: ["The same", "Twice as long", "Four times as long", "Half as long"],
        answer: 2,
        why: "Braking distance increases with the square of speed — double the speed means roughly four times the braking distance." },

      { q: "Controlled braking means:",
        choices: ["Pumping the brakes on and off rapidly", "Applying the brakes firmly without locking the wheels, keeping steering control", "Slamming the brakes to the floor", "Using only the parking brake"],
        answer: 1,
        why: "Controlled braking applies the brakes as hard as you can without locking the wheels so you can still steer." },

      { q: "Stab braking (on a vehicle WITHOUT ABS) is done by:",
        choices: ["Holding the brakes locked", "Applying the brakes fully, releasing when wheels lock, then reapplying once they roll", "Pressing lightly the whole time", "Pumping rapidly many times a second"],
        answer: 1,
        why: "Stab braking: brake fully, release when the wheels lock up, wait for the wheels to start rolling, then brake fully again." },

      { q: "An escape ramp on a long downgrade is designed to:",
        choices: ["Let you rest", "Stop a runaway vehicle safely using soft gravel or an uphill grade", "Check your brakes", "Pay a toll"],
        answer: 1,
        why: "Escape ramps use loose gravel or an uphill slope to stop runaway vehicles and avoid a crash — use one if your brakes fail." },

      { q: "If your brakes fail on a downgrade and there is no escape ramp, you should:",
        choices: ["Turn off the engine", "Look for an escape route such as an open field, side road, or a way to slow by rubbing against a guardrail", "Jump out", "Speed up to outrun it"],
        answer: 1,
        why: "Find an escape path early; as a last resort, sideswiping a barrier to slow down beats a high-speed crash." },

      { q: "If a tire suddenly blows out at speed, you should:",
        choices: ["Brake hard immediately", "Hold the steering wheel firmly, stay off the brake, let the vehicle slow, then ease off the road", "Turn sharply to the shoulder", "Accelerate"],
        answer: 1,
        why: "Hold the wheel firmly to keep straight, stay off the brake until you slow down, then brake gently and pull off safely." },

      { q: "Which of the following is a sign of tire failure?",
        choices: ["A smooth quiet ride", "A loud bang, vibration, or a thumping sound", "Better fuel economy", "Cooler brakes"],
        answer: 1,
        why: "A bang, heavy thumping, or sudden vibration/steering pull can mean a tire has failed — check it immediately." },

      { q: "Convex (curved, 'spot' or 'fisheye') mirrors:",
        choices: ["Make objects look closer than they are", "Show a wider area but make objects look smaller and farther away than they really are", "Show only the trailer", "Are illegal"],
        answer: 1,
        why: "Convex mirrors give a wider view, but objects appear smaller and farther away than they actually are." },

      { q: "How should you use your mirrors?",
        choices: ["Stare into them constantly", "Check them regularly with quick glances, especially before lane changes, turns, and merges", "Only at stops", "Only the left mirror"],
        answer: 1,
        why: "Scan mirrors with quick, regular glances — and always check before changing lanes, turning, or merging." },

      { q: "Texting or using a hand-held phone while driving a CMV is:",
        choices: ["Allowed at low speed", "Prohibited — it is a serious violation that can lead to fines and disqualification", "Fine if you are stopped at a light", "Encouraged for navigation"],
        answer: 1,
        why: "Federal rules prohibit texting and hand-held phone use while driving a CMV; violations bring fines and possible disqualification." },

      { q: "The most important thing you can do to look professional and drive safely is to:",
        choices: ["Drive fast to save time", "Manage your speed, space, and attention — and never drive impaired or fatigued", "Tailgate slow traffic", "Skip breaks"],
        answer: 1,
        why: "Safe driving comes from good speed and space management, full attention, and never driving tired or impaired." },

      { q: "What should you do when you are drowsy and need to keep driving?",
        choices: ["Open the window and turn up the radio to push through", "Stop and get rest or sleep — these tricks do not keep you safely awake", "Drink more coffee and continue all night", "Drive faster to finish sooner"],
        answer: 1,
        why: "The only real cure for fatigue is sleep. Caffeine, fresh air, and loud music do not keep you safely alert." },

      { q: "When you are being tailgated, the best response is to:",
        choices: ["Brake-check the tailgater", "Increase your following distance ahead and avoid sudden moves so the tailgater can get around you", "Speed up a lot", "Turn on your high beams"],
        answer: 1,
        why: "Open up more room in front of you and avoid quick changes, making it easier and safer for the tailgater to pass." },

      { q: "Hazardous-condition driving (rain, snow, fog) generally calls for:",
        choices: ["Higher speeds to get through faster", "Reducing speed well below the posted limit and increasing following distance", "Using cruise control", "Following closely to see better"],
        answer: 1,
        why: "Slow down (often far below the limit), increase your space, and never use cruise control on slippery roads." },

      { q: "Using cruise control on wet or icy roads is:",
        choices: ["Recommended", "Dangerous — it can keep power on and cause a skid; turn it off", "Required by law", "Only a problem at night"],
        answer: 1,
        why: "On slick roads cruise control can spin the wheels and cause a skid; keep it off so you control the throttle." },

      { q: "In a vehicle fire, after pulling off and away from buildings, you should:",
        choices: ["Open the hood right away to look inside", "Keep the hood closed if the engine is on fire, aim the extinguisher at the base of the fire, and call for help", "Use water on an electrical or fuel fire", "Drive to a station for help"],
        answer: 1,
        why: "Don't fan a hood fire by opening it; aim the extinguisher at the base of the flames and only fight a fire you can handle safely." },

      { q: "What class of fire extinguisher works on electrical and burning-liquid (fuel) fires?",
        choices: ["Class A only (water)", "A B:C or A:B:C rated extinguisher", "Any garden hose", "No extinguisher works on these"],
        answer: 1,
        why: "Use a B:C (or multipurpose A:B:C) extinguisher on electrical and flammable-liquid fires — never plain water." },

      { q: "When you must stop on the side of a road, you should put out warning devices (triangles/flares) within:",
        choices: ["30 minutes", "10 minutes", "1 hour", "Only if it's dark"],
        answer: 1,
        why: "Place your reflective triangles or warning devices within 10 minutes of stopping to warn approaching traffic." },

      { q: "On a two-lane road, where do you place the three warning triangles?",
        choices: ["All three behind the vehicle in a line", "10 ft behind, 100 ft behind, and 100 ft in front of the vehicle", "Only one, right at the bumper", "100 ft to each side"],
        answer: 1,
        why: "On an undivided two-way road: one ~10 ft behind, one ~100 ft behind, and one ~100 ft ahead of the vehicle." },

      { q: "Required documents/equipment you should have before a trip include:",
        choices: ["Only your phone", "A valid CDL, medical certificate, and emergency equipment (fire extinguisher, spare fuses, warning triangles)", "Just the keys", "A spare tire only"],
        answer: 1,
        why: "Carry your valid CDL and medical card, and make sure required emergency gear — extinguisher, fuses, and warning triangles — is aboard." },

      { q: "The safest speed on a curve is:",
        choices: ["The posted highway limit", "A speed slow enough that you have already braked BEFORE entering the curve", "As fast as traction allows mid-curve", "Whatever feels right"],
        answer: 1,
        why: "Slow to a safe speed before the curve, because braking in a curve can cause a skid; a posted curve speed is for cars, so go slower in a truck." }
    ]
  },

  airbrakes: {
    title: "Air Brakes",
    blurb: "Required to drive any vehicle with air brakes — removes the air-brake restriction.",
    questions: [
      { q: "An air brake system actually has how many separate braking systems?",
        choices: ["One", "Two", "Three: service, parking, and emergency", "Four"],
        answer: 2,
        why: "Air brakes combine three systems: the service brakes, the parking brakes, and the emergency brakes." },

      { q: "The air compressor governor controls:",
        choices: ["Engine speed", "When the compressor pumps air into the tanks (cut-in and cut-out)", "The parking brake", "Tire pressure"],
        answer: 1,
        why: "The governor cuts the compressor in (~100 psi) and out (~125 psi) to keep tank pressure in range." },

      { q: "The safety valve in the air supply tank is usually set to open at:",
        choices: ["60 psi", "100 psi", "125 psi", "150 psi"],
        answer: 3,
        why: "A safety relief valve protects the tank and is normally set to open at 150 psi." },

      { q: "The low air pressure warning signal must come on before pressure drops below:",
        choices: ["20 psi", "60 psi", "100 psi", "85 psi"],
        answer: 1,
        why: "The low-air warning (light/buzzer) must activate before pressure falls below 60 psi." },

      { q: "On most vehicles, the spring (parking/emergency) brakes come on automatically when air pressure drops to about:",
        choices: ["55–60 psi", "20–45 psi", "5–10 psi", "100 psi"],
        answer: 1,
        why: "When air pressure falls to roughly 20–45 psi, the spring brakes apply automatically." },

      { q: "Before driving a vehicle with air brakes, air pressure should be built up to at least:",
        choices: ["60 psi", "Governor cut-out (about 100–125 psi)", "20 psi", "150 psi"],
        answer: 1,
        why: "Let the compressor build to the governor cut-out level (about 100–125 psi) before driving." },

      { q: "Why must you drain water from the air tanks?",
        choices: ["To make the engine quieter", "Water (and compressor oil) can reduce braking and freeze in cold weather", "To increase air pressure", "It is not necessary"],
        answer: 1,
        why: "Water and oil collect in the tanks; they can damage the system and freeze, so drain the tanks daily." },

      { q: "In a dual air system, after a full charge with the engine off and brakes released, air loss should not exceed:",
        choices: ["2 psi in one minute for a straight truck", "10 psi per minute", "It doesn't matter", "20 psi per minute"],
        answer: 0,
        why: "Released-leak limit is about 2 psi/min (single vehicle) or 3 psi/min (combination); applied limits are 3 and 4 psi/min." },

      { q: "Air braking takes more time than hydraulic braking because of:",
        choices: ["Brake fade", "Brake lag — the time for air to flow through the lines", "Low air pressure", "Cold weather only"],
        answer: 1,
        why: "Air must travel through the lines (brake lag adds roughly half a second), which adds to total stopping distance." },

      { q: "To test the low air pressure warning, you should:",
        choices: ["Drive fast and brake", "Turn the electrical power on, build full pressure, then shut the engine off and fan the brakes down — the warning must come on before 60 psi", "Pump the throttle", "Drain all the tanks while driving"],
        answer: 1,
        why: "With the engine off, step on and off the brake to lower pressure; the warning must activate before pressure drops below 60 psi." },

      { q: "To test that the spring brakes come on automatically:",
        choices: ["Brake hard at speed", "Continue fanning off air pressure — the parking/spring brakes should pop out (apply) in the 20–45 psi range", "Drain the tanks completely while moving", "Rev the engine"],
        answer: 1,
        why: "Keep reducing air pressure with the engine off; the spring brakes should apply automatically around 20–45 psi." },

      { q: "To test the parking (spring) brakes, you should:",
        choices: ["Pull against them gently in a low gear with the parking brake set", "Set them at highway speed", "Never test them", "Test only the service brakes"],
        answer: 0,
        why: "Stop, set the parking brake, then gently try to move forward in low gear to confirm the brakes hold." },

      { q: "To test the service brakes, you should:",
        choices: ["Slam the brakes from 55 mph", "Move at about 5 mph and apply the brakes firmly, feeling for pulling or delay", "Only check them parked", "Skip the test"],
        answer: 1,
        why: "At about 5 mph, push the brake pedal firmly; note any pulling to one side, unusual feel, or delayed stopping." },

      { q: "The alcohol evaporator in an air brake system is used to:",
        choices: ["Power the brakes", "Help reduce the risk of ice in the air system and valves in cold weather", "Clean the windshield", "Increase horsepower"],
        answer: 1,
        why: "An alcohol evaporator puts alcohol into the air to reduce freeze-up of the system in cold weather." },

      { q: "Does ABS (Anti-lock Braking System) shorten your stopping distance?",
        choices: ["Yes, always", "No — ABS helps you keep control/steering during hard braking, it doesn't necessarily stop you shorter", "Yes, by half", "Only on ice"],
        answer: 1,
        why: "ABS keeps the wheels from locking so you can steer; it does not guarantee a shorter stop. Brake normally." },

      { q: "When parking a vehicle with air brakes for a long time, you should:",
        choices: ["Leave it in gear only", "Use wheel chocks if needed and set the parking brakes — but NOT if the brakes are very hot or wet in freezing weather", "Always set hot brakes", "Leave brakes released"],
        answer: 1,
        why: "Don't apply the parking brake when brakes are very hot (they can be damaged) or wet in freezing temps (they can freeze)." },

      { q: "The application pressure gauge tells you:",
        choices: ["Tank pressure", "How much air pressure you are applying to the brakes", "Oil pressure", "Tire pressure"],
        answer: 1,
        why: "The application gauge shows the air pressure being sent to the brakes when you press the pedal." },

      { q: "If the low air pressure warning comes on while driving, you should:",
        choices: ["Keep driving to the next exit", "Stop safely and park as soon as possible — a major air leak can cause the brakes to apply or fail", "Pump the brakes", "Ignore it"],
        answer: 1,
        why: "Low air is an emergency; stop and secure the vehicle right away, because the spring brakes could apply suddenly." },

      { q: "Fanning (pumping) the brakes repeatedly on a long downgrade is a bad idea because:",
        choices: ["It saves air", "It can use up air faster than the compressor can replace it, lowering pressure", "It improves cooling", "It is required"],
        answer: 1,
        why: "Repeated on-off braking uses air; if pressure drops too low the spring brakes may apply. Use steady/snub braking instead." },

      { q: "How fast should air pressure build in a dual air system?",
        choices: ["From 85 to 100 psi within about 45 seconds", "From 0 to 150 in 5 seconds", "It does not matter", "Over 5 minutes"],
        answer: 0,
        why: "In a typical dual system, pressure should build from 85 to 100 psi within about 45 seconds." },

      { q: "Brake drums (or discs), shoes, and linings should be inspected for:",
        choices: ["Color only", "Cracks, oil/grease, and worn-thin linings", "Brand name", "Air pressure"],
        answer: 1,
        why: "Check brake drums/discs for cracks and the linings for grease, oil, or excessive wear before driving." },

      { q: "Slack adjusters on S-cam brakes:",
        choices: ["Never need checking", "Should be checked for excessive travel — too much free play means the brakes are out of adjustment", "Control the steering", "Hold air pressure"],
        answer: 1,
        why: "With the brakes released you should not be able to pull a slack adjuster out by hand more than about an inch; more travel means they need adjustment." },

      { q: "On a vehicle with air brakes, the parking brake is held on by:",
        choices: ["Air pressure pushing the brakes on", "Powerful springs — air pressure holds the spring brakes OFF when released", "Hydraulic fluid", "A cable"],
        answer: 1,
        why: "Spring (parking) brakes are applied by springs; air pressure is what holds them released. Lose air and the springs apply." },

      { q: "You should NEVER do which of these with the brake pedal while parked with the spring brakes set?",
        choices: ["Press and hold the brake pedal in addition to the spring brakes for a long stop", "Use the service brake pedal AND the parking brake together as your only park method on a steep hill without chocks", "Release the pedal", "Test the gauge"],
        answer: 1,
        why: "Don't rely on pressing the service brake while the spring brakes are set; if air leaks off both, the brakes can release. Use chocks." },

      { q: "What does the supply pressure gauge show?",
        choices: ["How hard you are pressing the brake", "How much pressure is in the air tanks", "Engine oil pressure", "Coolant temperature"],
        answer: 1,
        why: "The supply (tank) pressure gauge shows how much air is stored in the tanks; the application gauge shows what you're applying." },

      { q: "Modern air-braked tanks have automatic moisture drains, but you should still:",
        choices: ["Ignore the tanks entirely", "Manually drain the tanks if needed and never rely solely on automatics in cold weather", "Fill the tanks with oil", "Remove the drain valves"],
        answer: 1,
        why: "Automatic drains help, but you should still check and manually drain tanks, especially in freezing conditions." },

      { q: "The 'cut-out' pressure of the governor is the point at which the compressor:",
        choices: ["Starts pumping air in", "Stops pumping air into the tanks (around 125 psi)", "Releases all air", "Sounds the warning"],
        answer: 1,
        why: "Cut-out (~125 psi) is when the governor stops the compressor; cut-in (~100 psi) is when it resumes pumping." },

      { q: "If the air compressor is belt-driven, before the trip you should check:",
        choices: ["The radio", "The compressor drive belt for tightness and condition", "The mirrors only", "The fuel cap"],
        answer: 1,
        why: "A loose or worn compressor drive belt can fail to keep the tanks charged — inspect it during the pre-trip." },

      { q: "Total stopping distance for air brakes is made up of:",
        choices: ["Just braking distance", "Perception + reaction + brake lag + effective braking distance", "Only brake lag", "Following distance"],
        answer: 1,
        why: "With air brakes, add brake lag (~0.5 sec, about 32 ft at 55 mph) to perception, reaction, and braking distance." },

      { q: "When you press the brake pedal harder, you are:",
        choices: ["Pumping less air", "Sending more air pressure to apply the brakes more firmly", "Releasing the parking brake", "Cooling the brakes"],
        answer: 1,
        why: "The harder you press, the more air pressure is applied to the brakes — but pressing too hard can lock the wheels." },

      { q: "Proper braking technique on a long downgrade with air brakes is to:",
        choices: ["Ride the brakes steadily the whole way", "Use a low gear and snub-brake: apply firmly to slow ~5 mph below your safe speed, release, and repeat", "Fan the brakes constantly", "Coast in neutral"],
        answer: 1,
        why: "Snub braking: in a low gear, brake firmly to drop ~5 mph below your safe speed, release, and let the brakes cool, then repeat." },

      { q: "After a complete pre-trip air check, the LAST step before driving is usually to:",
        choices: ["Drain all tanks again", "Build pressure back to cut-out and confirm the warning is off, then check that the service and parking brakes work", "Disconnect the battery", "Remove the wheel chocks first, then build air"],
        answer: 1,
        why: "Rebuild to governor cut-out, make sure the low-air warning is off, then verify the parking and service brakes function before moving." },

      { q: "If your air pressure keeps dropping and the compressor cannot keep up, the cause may be:",
        choices: ["Too much fuel", "A serious air leak that needs immediate attention", "Cold weather only", "New brake linings"],
        answer: 1,
        why: "A leak the compressor can't overcome is dangerous — stop safely; if pressure falls far enough the spring brakes will apply." },

      { q: "Dual air brake systems are used so that:",
        choices: ["You can go faster", "If one system (front or rear) fails, the other still provides some braking", "They are quieter", "They never need draining"],
        answer: 1,
        why: "A dual system has two separate air circuits; if one fails you keep partial braking — but stop as soon as it's safe." }
    ]
  },

  passenger: {
    title: "Passenger (P) Endorsement",
    blurb: "Required to drive a bus or vehicle designed to carry 16+ people (including driver).",
    questions: [
      { q: "Before driving a bus, you must make sure that:",
        choices: ["The radio works", "All emergency exits, signaling devices, and the loose-baggage/securement are safe and operating", "The seats are warm", "The fuel is premium"],
        answer: 1,
        why: "Check that emergency exits work, the warning/signaling devices function, and no loose baggage blocks aisles or exits." },

      { q: "Carry-on baggage must NOT:",
        choices: ["Be soft-sided", "Block the aisle, the doorway, or any emergency exit", "Be placed under seats", "Belong to standing riders"],
        answer: 1,
        why: "Baggage may never block the aisle, the entrance/door, or emergency exits, and must be secured so it can't fall." },

      { q: "The 'standee line' on a bus marks the point that:",
        choices: ["Passengers must board behind", "No standing rider may stand ahead of (in front of)", "Marks the rear seats", "Separates smoking and non-smoking"],
        answer: 1,
        why: "No standing passenger may stand forward of the standee line — it keeps riders out of the driver's area." },

      { q: "At a railroad crossing, a bus driver must:",
        choices: ["Roll through if it looks clear", "Stop between 15 and 50 feet before the nearest rail, look and listen, and not shift gears while crossing", "Stop only if a train is visible", "Speed up to cross quickly"],
        answer: 1,
        why: "Buses must stop 15–50 ft before the nearest rail, open the door, look and listen, and cross in a gear they won't need to change." },

      { q: "When approaching a drawbridge without a signal or attendant, a bus must:",
        choices: ["Cross without stopping", "Stop at least 50 feet before the draw of the bridge", "Stop 10 feet before", "Honk and proceed"],
        answer: 1,
        why: "Unless a traffic signal or attendant controls it, stop at least 50 ft before the draw and proceed only when it's safe." },

      { q: "Standing passengers must always remain:",
        choices: ["Near the driver", "Behind the standee line", "By the rear door", "In the stairwell"],
        answer: 1,
        why: "Riders standing must stay behind the standee line so they don't crowd or distract the driver." },

      { q: "Which of these may a passenger normally bring aboard a bus?",
        choices: ["A car battery", "Common hazardous materials in bulk", "Small-arms ammunition labeled ORM-D, emergency hospital supplies, or a drug box", "A tank of gasoline"],
        answer: 2,
        why: "Most hazmat is forbidden, but limited exceptions include labeled small-arms ammo, emergency hospital supplies, and a drug box." },

      { q: "You should refuel a bus with passengers aboard:",
        choices: ["Whenever convenient", "Only if absolutely necessary, never in an enclosed space, and never while smoking", "Anytime", "Only with the engine running"],
        answer: 1,
        why: "Avoid fueling with riders aboard; if unavoidable, never do it in a closed building and never allow smoking." },

      { q: "If your bus becomes disabled on a railroad crossing, you should first:",
        choices: ["Try to restart and push through", "Get the passengers off the bus and away from the tracks immediately", "Call the office", "Wait inside"],
        answer: 1,
        why: "Unload and move passengers far from the tracks at once, then notify authorities — life safety comes first." },

      { q: "Brake-door interlocks on a transit bus:",
        choices: ["Are a reliable parking brake", "Hold the brakes/throttle while the rear door is open but should NOT be used as a parking brake", "Lock the steering", "Control the heater"],
        answer: 1,
        why: "Interlocks apply brakes/hold throttle while the rear door is open, but never rely on them in place of the parking brake." },

      { q: "While driving, a bus driver should talk to passengers:",
        choices: ["Freely, to be friendly", "Only when necessary, and avoid conversations that take attention from driving", "Constantly", "Never speak at all"],
        answer: 1,
        why: "Keep your attention on driving; limit conversation, especially in heavy traffic or complex situations." },

      { q: "Passengers should be reminded to keep what clear at all times?",
        choices: ["The windows", "The aisle and the emergency exits", "The overhead lights", "The fare box"],
        answer: 1,
        why: "Aisles and emergency exits must stay clear of baggage, riders, and obstructions for safe evacuation." },

      { q: "When unloading passengers, common accidents happen because:",
        choices: ["The bus is too clean", "Riders move into hazardous areas (traffic) or get caught in the closing door", "The engine is off", "The mirrors are folded"],
        answer: 1,
        why: "Watch for riders stepping into traffic or being caught by the door; make sure the way is clear before moving." },

      { q: "On a charter or intercity bus, passengers should be:",
        choices: ["Allowed to stand while moving", "Seated before the bus moves", "Standing behind the line", "Outside until the last stop"],
        answer: 1,
        why: "On buses not designed for standees, all passengers should be seated before you begin driving." },

      { q: "Disruptive or unruly passengers should be discharged:",
        choices: ["Immediately on the highway shoulder", "At a safe place such as a scheduled stop or a well-lit area, not where it would be unsafe", "Only at the final destination", "Never"],
        answer: 1,
        why: "Don't put a problem rider off where it's unsafe; choose a regular stop or other safe, populated location." },

      { q: "After an accident, a bus driver's first responsibilities include:",
        choices: ["Leaving immediately", "Protecting the scene, caring for injured, and keeping the remaining passengers safe and calm", "Refueling", "Restarting the route"],
        answer: 1,
        why: "Secure the scene, tend to the injured, and keep passengers safe and orderly before resuming anything." },

      { q: "Before reaching the bottom of a hill or a curve, an experienced bus driver:",
        choices: ["Speeds up", "Slows down and brakes smoothly so passengers are not thrown about", "Pumps the brakes hard", "Coasts in neutral"],
        answer: 1,
        why: "Smooth, early speed control keeps standing or seated passengers from being jolted in curves and downhill." },

      { q: "Bus emergency exits must be:",
        choices: ["Painted shut for safety", "Checked before each trip to be sure they work and are not blocked", "Used as extra storage", "Locked from outside"],
        answer: 1,
        why: "Verify every trip that emergency exits open and are unobstructed — they are critical for evacuation." },

      { q: "When a passenger wants to get off between regular stops, you should:",
        choices: ["Stop immediately anywhere", "Only discharge at a safe, proper stopping location", "Refuse always", "Slow down and let them jump"],
        answer: 1,
        why: "Let riders off only where it is safe and legal to stop, not at random points in traffic." },

      { q: "A bus driver should do a post-trip inspection mainly to:",
        choices: ["Save fuel", "Report any defects and check for items/passengers left aboard", "Avoid paperwork", "Warm the engine"],
        answer: 1,
        why: "After the trip, inspect for defects to report and check the bus for sleeping riders or lost articles." },

      { q: "How far before the nearest rail must a bus stop at a railroad crossing?",
        choices: ["5 to 10 feet", "Between 15 and 50 feet", "100 feet", "It does not need to stop"],
        answer: 1,
        why: "Buses stop between 15 and 50 feet from the nearest rail, then look and listen before crossing." },

      { q: "At which type of railroad crossing does a bus normally NOT have to stop?",
        choices: ["A crossing with no gate", "A crossing controlled by a police officer or a green traffic light, or marked as 'exempt'/'abandoned'", "Any rural crossing", "A crossing at night"],
        answer: 1,
        why: "A bus need not stop where a green light, a flagman/officer directs traffic through, or the crossing is marked exempt or abandoned." },

      { q: "While crossing railroad tracks, a bus driver should:",
        choices: ["Shift gears halfway across for power", "Cross in a gear low enough that no gear change is needed until fully across", "Stop on the tracks to check both ways", "Coast in neutral"],
        answer: 1,
        why: "Never change gears while on the tracks; pick a gear that gets you fully across without shifting." },

      { q: "Buses must not carry which of the following?",
        choices: ["Sealed water bottles", "More than 100 lbs of permitted hazardous materials, or any forbidden hazmat such as explosives and most flammables", "Passengers' luggage", "Wheelchairs"],
        answer: 1,
        why: "Most hazmat is forbidden on buses; even allowed exceptions are tightly limited (e.g. small amounts), and riders' fuels/explosives are prohibited." },

      { q: "Where should a bus driver position the bus when picking up or discharging passengers?",
        choices: ["In the traffic lane", "As close to the curb/stop as safely possible so riders don't step into traffic", "On a curve", "Wherever it's convenient"],
        answer: 1,
        why: "Pull fully to the designated stop/curb so passengers can board and exit away from moving traffic." },

      { q: "Before allowing passengers to leave at a rest or scheduled stop, the driver should:",
        choices: ["Leave the bus running and walk away", "Secure the bus: parking brake set, engine off (or interlock), and the bus safely parked", "Block an exit", "Speed off after the last rider"],
        answer: 1,
        why: "Always secure the bus — parking brake on and properly parked — before anyone gets on or off." },

      { q: "Passengers who are intoxicated or causing a disturbance should be:",
        choices: ["Allowed to do as they wish", "Refused boarding or discharged at a safe place, to protect the other passengers", "Given the front seat", "Asked to drive"],
        answer: 1,
        why: "For everyone's safety, don't board obviously intoxicated or disruptive riders, and discharge problem riders only at a safe location." },

      { q: "On a bus, the driver should announce or be aware of stops so that:",
        choices: ["The radio stays on", "Passengers have time to prepare and exit safely without rushing", "The bus goes faster", "Fares increase"],
        answer: 1,
        why: "Clear, timely stop information lets riders get ready and move to the door safely rather than rushing at the last second." },

      { q: "Prohibited practices for a bus driver include:",
        choices: ["Checking mirrors", "Towing/pushing a disabled bus with passengers aboard (except in an emergency to the nearest safe spot)", "Stopping at the curb", "Using turn signals"],
        answer: 1,
        why: "Generally you may not tow or push a loaded bus; passengers should be moved off first, except briefly in an emergency to reach safety." },

      { q: "When approaching a bus stop, you should slow down:",
        choices: ["Hard at the last second", "Gradually and smoothly so standing passengers aren't thrown forward", "Only if passengers complain", "Never — maintain speed"],
        answer: 1,
        why: "Smooth, gradual braking protects standing and seated riders from being jolted as you approach the stop." },

      { q: "If your bus is equipped with a kneeling feature or lift for riders with disabilities, you should:",
        choices: ["Skip it to save time", "Operate it properly and ensure mobility devices are secured before moving", "Let passengers operate it themselves", "Use it only when full"],
        answer: 1,
        why: "Use accessibility equipment correctly and make sure wheelchairs/mobility aids are properly secured before driving." },

      { q: "The interlock system on a transit bus typically activates when:",
        choices: ["The headlights are on", "The rear (or designated) doors are open, holding the brakes and idle", "The radio is on", "The bus is full"],
        answer: 1,
        why: "Door interlocks apply the brakes and hold the throttle at idle while the door is open — but they are not a substitute for the parking brake." },

      { q: "Buses are generally limited in standees so that:",
        choices: ["The bus looks empty", "Only buses designed and equipped for standing passengers may carry them, and only behind the standee line", "More fares can be collected", "Standees ride free"],
        answer: 1,
        why: "Standees are allowed only on buses built for them, and those riders must stay behind the standee line." },

      { q: "A key part of a bus pre-trip inspection that other vehicles don't require is checking:",
        choices: ["The trailer hitch", "Passenger items: seats, emergency exits, signaling devices, handholds, and the absence of aisle obstructions", "The fifth wheel", "Cargo tie-downs"],
        answer: 1,
        why: "Bus pre-trips add passenger-safety items — seats, emergency exits, handholds, signaling devices, and clear aisles." }
    ]
  }
};
