---
title: "Pillars of Software Engineering"
date: 2024-04-28T10:59:55-05:00
draft: true
toc: false
images:
tags:
  - concepts
  - fundamentals
---

## Interfaces, Protocols, Specifications and Standards

There are four pillars of SWE abstractions: Interfaces, Protocols, Specifications and Standards. These four pillars encompass all of software. Everything becomes clearer, once these terms and concepts are deeply understood.


## Interfaces

> "The point of communication between two systems"

__A traffic light is an interface. It is the point of communication between the driver and the intersection__

The traffic light has a very simple interface. Let's define it in code.

```typescript
enum TrafficLightColor {
    GREEN,
    YELLOW,
    RED
}

class MainAndFourthTrafficLight implements trafficLight{
    constructor(){
        this.currentStreetColor:TrafficLightColor = TrafficLightColor.RED
        this.crossStreetColor:TrafficLightColor = TrafficLightColor.RED
    }
    currentStreet():TrafficLightColor {
        
    }
    crossStreet():TrafficLightColor {

    }
}

interface trafficLight {
    currentLight():TrafficLightColor
}
```

That's it. The two "Systems" could be a human and a door. The interface could be the doorknob. Most doorknobs have the same interface as they rotate to open the door. Have you ever looked inside a doorknob? Do you know how it works? It could be little gnomes, magic, gears etc. It really doesn't matter when you use it. Same with a vehicle. As long as it has a steering wheel, pedals and a shifter, I could drive it.

There was a landmark case between Oracle and Google over Google using both the Java `interface` keyword "code" that defined the interface(s) of Android. Thankfully, Google won. Otherwise, a company could own an interface instead of a concrete implementation. Imagine a company owning the wheel, not a specific style wheel for a specific use but the general idea of a circular apparatus for steering a vehicle. 


## Protocols

> "A set of rules for communication over an interface"

> "established rules that specify how to format, send and receive data"

__A traffic light's protocol is the rules around the colors. RED indicates drivers must STOP, GREEN indicates drivers must GO and YELLOW indicates that drivers must either CONTINUE or STOP.__

```typescript
switch(light.color){
    case TrafficLightColor.Green:
        car.go();
    break;
    case TrafficLightColor.Red:
        car.stop();
    break;
    case TrafficLightColor.Yellow:
        if(car.isIntersection){
            car.go();
        }else{
            car.stop();
        }
    break;
}
```


## Specification

> "A specification is a statement detailing a requirement that should or must be satisfied (depending on the contractual or regulatory context) for some specific product or process (including protocols), or set of such products or processes"

_Traffic Light Specification details colors, the order of colors, light intensity etc._


## Standard

> "A standard is a specification established by some institution that some class of objects or processes could or should satisfy. All standards are specifications."

_Traffic Light is an ISO standard [ISO 16508:1999(en)
Road traffic lights](https://www.iso.org/obp/ui/en/#iso:std:iso:16508:ed-1:v2:en)_


## Examples in Code

Interfaces are everywhere. When an interface is created for software that is called an API, application programmable interface.

The below code uses an interface. `binOp` takes an `op` function that has two parameters.

```javascript
let binOp = (op) => (a,b) => op(a,b);
let avg = binOp((a,b)=>(a+b)/2);
avg(10,20); // 15
let hypo = binOp((a,b)=> Math.sqrt(a*a+b*b));
hypo(3,4); // 5
```

## The world is your oyster

Once these four pillars are understood then understanding HTTP, TCP, WEBSOCKETS etc become a breeze. My students learn `MongoDB`. I explained that even though use are using `JavaScript` to connect to `MongoDB`, that we could use any language if we wanted to. MongoDB has it's own communication protocol. If we follow that protocol, then we can communicate with MongoDB. I'll have to show this because it is a fairly simple protocol and I'm working on my own programming language `Silicon`. So I could build my own standard library for connecting to `MongoDB`. 