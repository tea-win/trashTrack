# trashTrack

nwHacks 2020

# Inspriration
When we were at UBC, we noticed that people were messing up trash bins and threw away, for example, banana peel in the recycle bin? It would heavily damage to equipment and danger to employees in the sorting process. And most importantly, it can cause harm to the environment!

# What it does
Some people just geniuely don't know how to recycle properly so we thought we might want to help them by
scanning what type of waste is compostable for them. If user recycle correctly, we praise them. However, if they do it wrong,
we ROAST them!

# How we built it
Set up Python integrations of Azure Computer Image and Azure SQL Database for backend. 
Implemented OpenCV for camera motion recognition

#Challenges we ran into
We had trouble distinguishing who placed the trash. We tried several methods: bluetooth connection, which was difficult to set up; wifi-signal strength, which was not accurate, and a physical tag for each user, which is not seamless.

# What's next for trashTrack
Currently, it's functioning without the user-interface. We are planning to build a user-interface and train our model to recognize more type of waste
