class TogglableEffect {
    constructor(
        name,
        settingsKey,
        icon,
        durationMinutes,
        durationTurns,
        flags,
        effects = []
    ) {
        this.name = name
        this.settingsKey = settingsKey
        this.icon = icon
        this.durationMinutes = durationMinutes
        this.durationTurns = durationTurns
        this.flags = flags
        this.effects = effects
    }

    effectDict(customEffectValue) {
        this.effects.forEach(effect => effect.value = typeof effect.value == "string" ? effect.value.replace("{value}", customEffectValue || 0) : effect.value)
        return {
            name: this.name,
            label: "Toggled Effect: " + this.name,
            icon: this.icon,
            duration: getDurationData(this.durationMinutes, eval(this.durationTurns || "")),
            flags: this.flags,
            changes: this.effects
        };
    }
}

class ThandulBuffsAndEffects {

    static effects = [
        new TogglableEffect("Bane", "Bane", "modules/ThandulsTogglableEffects/media/bane.jpg", 1, undefined, {}, [
            {key: "data.bonuses.abilities.save", mode: 2, value: "-1d4"},
            {key: "data.bonuses.All-Attacks", mode: 2, value: "-1d4"},
        ]),
        new TogglableEffect("Barkskin", "Barkskin", "modules/ThandulsTogglableEffects/media/barkskin.jpg", 60, undefined, {}, [
            {key: "data.attributes.ac.value", mode: 4, value: 16, priority: 5},
        ]),
        new TogglableEffect("Beacon of Hope", "Beacon of Hope", "modules/ThandulsTogglableEffects/media/beacon-of-hope.jpg", 1, undefined, {}, [
            {key: "flags.midi-qol.advantage.ability.save.wis", mode: 2, value: 1},
            {key: "flags.midi-qol.advantage.deathSave", mode: 2, value: 1},
        ]),
        new TogglableEffect("Bless", "Bless", "modules/ThandulsTogglableEffects/media/bless.jpg", 1, undefined, {}, [
            {key: "data.bonuses.abilities.save", mode: 2, value: "+1d4"},
            {key: "data.bonuses.All-Attacks", mode: 2, value: "+1d4"},
        ]),
        new TogglableEffect("Darkvision", "Darkvision", "modules/ThandulsTogglableEffects/media/darkvision.jpg", 480, undefined, {}, [
            {key: "data.attributes.senses.darkvision", mode: 4, value: "60", priority: 5},
        ]),
        new TogglableEffect("Crimson Rite of the Flame", "Crimson Rite of the Flame", "modules/ThandulsTogglableEffects/media/crimson-rite-of-the-flame.png"),
        new TogglableEffect("Crimson Rite of the Frozen", "Crimson Rite of the Frozen", "modules/ThandulsTogglableEffects/media/crimson-rite-of-the-frozen.png"),
        new TogglableEffect("Crimson Rite of the Storm", "Crimson Rite of the Storm", "modules/ThandulsTogglableEffects/media/crimson-rite-of-the-storm.png"),
        new TogglableEffect("Crimson Rite of the Dead", "Crimson Rite of the Dead", "modules/ThandulsTogglableEffects/media/crimson-rite-of-the-dead.png"),
        new TogglableEffect("Crimson Rite of the Oracle", "Crimson Rite of the Oracle", "modules/ThandulsTogglableEffects/media/crimson-rite-of-the-oracle.png"),
        new TogglableEffect("Crimson Rite of the Roar", "Crimson Rite of the Roar", "modules/ThandulsTogglableEffects/media/crimson-rite-of-the-roar.png"),
        new TogglableEffect("Enlarge", "Enlarge", "modules/ThandulsTogglableEffects/media/enlargereduce.jpg", 1, undefined, {}, [
            {key: "data.bonuses.weapon.damage", mode: 2, value: "+1d4"},
            {key: "flags.midi-qol.advantage.ability.check.str", mode: 2, value: 1},
            {key: "flags.midi-qol.advantage.ability.save.str", mode: 2, value: 1},
        ]),
        new TogglableEffect("Favoured Enemy", "Favoured Enemy", "modules/ThandulsTogglableEffects/media/favoured-enemy.png", 100, undefined, {}, [
            {key: "data.bonuses.weapon.damage", mode: 2, value: "+2"},
        ]),
        new TogglableEffect("Flanking", "Flanking", "modules/ThandulsTogglableEffects/media/flanking.jpg", 10, undefined, {}, [
            {key: "flags.midi-qol.advantage.attack.mwak", mode: 2, value: 1},
            {key: "flags.midi-qol.advantage.attack.msak", mode: 2, value: 1},
        ]),
        new TogglableEffect("Fly", "Fly", "modules/ThandulsTogglableEffects/media/fly.jpg", 10, undefined, {}, [
            {key: "data.attributes.movement.fly", mode: 4, value: 60, priority: 5},
        ]),
        new TogglableEffect("Fortune's Favor", "Fortune's Favor", "modules/ThandulsTogglableEffects/media/fortunes-favor.jpg", 60, undefined, {}, [
            {key: "data.attributes.inspiration", mode: 4, value: 1, priority: 5},
        ]),
        new TogglableEffect("Gift of Alacrity", "Gift of Alacrity", "modules/ThandulsTogglableEffects/media/gift-of-alacrity.jpg", 480, undefined, {}, [
            {key: "data.attributes.init.value", mode: 2, value: "+1d8"},
        ]),
        new TogglableEffect("Great Weapon Master", "Great Weapon Master", "modules/ThandulsTogglableEffects/media/great-weapon-master.jpg", 0.1, 1, {
            dae: {
                specialDuration: ["turnEnd"]
            }
        }, [
            {key: "data.bonuses.mwak.attack", mode: 2, value: "-5"},
            {key: "data.bonuses.mwak.damage", mode: 2, value: "+10"},
        ]),
        new TogglableEffect("Greater Favoured Enemy", "Greater Favoured Enemy", "modules/ThandulsTogglableEffects/media/favoured-enemy.png", 100, undefined, {}, [
            {key: "data.bonuses.weapon.damage", mode: 2, value: "+4"},
        ]),
        new TogglableEffect("Greater Invisibility", "Greater Invisibility", "modules/ThandulsTogglableEffects/media/greater-invisibility.jpg", 1, undefined, {}, [
            {key: "flags.midi-qol.advantage.attack.all", mode: 2, value: 1},
        ]),
        new TogglableEffect("Guardian of Nature (Great Tree)", "Guardian of Nature (Great Tree)", "modules/ThandulsTogglableEffects/media/guardian-of-nature.jpg", 1, undefined, {}, [
            {key: "flags.midi-qol.advantage.ability.save.con", mode: 2, value: 1},
            {key: "flags.midi-qol.advantage.attack.dex", mode: 2, value: "1"},
            {key: "flags.midi-qol.advantage.attack.str", mode: 2, value: "1"},
        ]),
        new TogglableEffect("Guardian of Nature (Primal Beast)", "Guardian of Nature (Primal Beast)", "modules/ThandulsTogglableEffects/media/guardian-of-nature.jpg", 1, undefined, {}, [
            {key: "data.attributes.movement.walk", mode: 2, value: "+10"},
            {key: "data.attributes.senses.darkvision", mode: 4, value: "120", priority: 5},
            {key: "flags.midi-qol.advantage.attack.str", mode: 2, value: "1"},
            {key: "data.bonuses.mwak.damage", mode: 2, value: "+1d6"},
        ]),
        new TogglableEffect("Guidance", "Guidance", "modules/ThandulsTogglableEffects/media/guidance.jpg", 1, undefined, {
            dae: {
                specialDuration: ["isCheck", "isSkill"]
            }
        }, [
            {key: "data.bonuses.abilities.check", mode: 2, value: "+1d4"},
            {key: "data.attributes.init.value", mode: 2, value: "+1d4"},
        ]),
        new TogglableEffect("Haste", "Haste", "modules/ThandulsTogglableEffects/media/haste.jpg", 1, undefined, {}, [
            {key: "data.attributes.ac.value", mode: 2, value: "+2", priority: 80},
            {key: "data.attributes.movement.burrow", mode: 1, value: 2, priority: 10},
            {key: "data.attributes.movement.climb", mode: 1, value: 2, priority: 10},
            {key: "data.attributes.movement.fly", mode: 1, value: 2, priority: 10},
            {key: "data.attributes.movement.swim", mode: 1, value: 2, priority: 10},
            {key: "data.attributes.movement.walk", mode: 1, value: 2, priority: 10},
            {key: "flags.midi-qol.advantage.ability.save.dex", mode: 2, value: 1, priority: 10},
        ]),
        new TogglableEffect("Holy Aura", "Holy Aura", "modules/ThandulsTogglableEffects/media/holy-aura.jpg", 1, undefined, {}, [
            {key: "flags.midi-qol.advantage.attack.all", mode: 2, value: 1},
        ]),
        new TogglableEffect("Hunter's Mark 1h", "Hunter's Mark 1h", "modules/ThandulsTogglableEffects/media/hunters-mark.jpg", 60, undefined, {}, [
            {key: "data.bonuses.weapon.damage", mode: 2, value: "+1d6"},
        ]),
        new TogglableEffect("Hunter's Mark 8h", "Hunter's Mark 8h", "modules/ThandulsTogglableEffects/media/hunters-mark.jpg", 60 * 8, undefined, {}, [
            {key: "data.bonuses.weapon.damage", mode: 2, value: "+1d6"},
        ]),
        new TogglableEffect("Hunter's Mark 24h", "Hunter's Mark 24h", "modules/ThandulsTogglableEffects/media/hunters-mark.jpg", 60 * 24, undefined, {}, [
            {key: "data.bonuses.weapon.damage", mode: 2, value: "+1d6"},
        ]),
        new TogglableEffect("Hybrid Transformation", "Hybrid Transformation", "modules/ThandulsTogglableEffects/media/hybrid-transformation.jpg"),
        new TogglableEffect("Invisibility", "Invisibility", "modules/ThandulsTogglableEffects/media/invisibility.jpg", 60, undefined, {
            dae: {
                specialDuration: ["1Attack",  "1Spell"]
            }
        }, [
            {key: "flags.midi-qol.advantage.attack.all", mode: 2, value: 1},
        ]),
        new TogglableEffect("Longstrider", "Longstrider", "modules/ThandulsTogglableEffects/media/longstrider.jpg", 60, undefined, {}, [
            {key: "data.attributes.movement.burrow", mode: 2, value: "+10"},
            {key: "data.attributes.movement.climb", mode: 2, value: "+10"},
            {key: "data.attributes.movement.fly", mode: 2, value: "+10"},
            {key: "data.attributes.movement.swim", mode: 2, value: "+10"},
            {key: "data.attributes.movement.walk", mode: 2, value: "+10"},
        ]),
        new TogglableEffect("Mage Armor", "Mage Armor", "modules/ThandulsTogglableEffects/media/mage-armor.jpg", 480, undefined, {}, [
            {key: "data.attributes.ac.value", mode: 4, value: "{value}", priority: 5},
        ]),
        new TogglableEffect("Pass without Trace", "Pass without Trace", "modules/ThandulsTogglableEffects/media/pass-without-trace.jpg", 60, undefined, {}, [
            {key: "data.skills.ste.mod", mode: 2, value: "+10"},
        ]),
        new TogglableEffect("Rage", "Rage", "modules/ThandulsTogglableEffects/media/rage.jpg"),
        new TogglableEffect("Reckless Attack", "Reckless Attack", "modules/ThandulsTogglableEffects/media/reckless-attack.jpg", 0.1, 1, {
            dae: {
                specialDuration: ["turnEnd"]
            }
        }, [
            {key: "flags.midi-qol.advantage.attack.mwak", mode: 2, value: 1},
        ]),
        new TogglableEffect("Reduce", "Reduce", "modules/ThandulsTogglableEffects/media/enlargereduce.jpg", 1, undefined, {}, [
            {key: "data.bonuses.weapon.damage", mode: 2, value: "-1d4"},
            {key: "flags.midi-qol.disadvantage.ability.check.str", mode: 2, value: 1},
            {key: "flags.midi-qol.disadvantage.ability.save.str", mode: 2, value: 1},
        ]),
        new TogglableEffect("Sharpshooter", "Sharpshooter", "modules/ThandulsTogglableEffects/media/sharpshooter.jpg", 0.1, 1, {
            dae: {
                specialDuration: ["turnEnd"]
            }
        }, [
            {key: "data.bonuses.rwak.attack", mode: 2, value: "-5"},
            {key: "data.bonuses.rwak.damage", mode: 2, value: "+10"},
        ]),
        new TogglableEffect("Shield", "Shield", "modules/ThandulsTogglableEffects/media/shield.jpg"),
        new TogglableEffect("Shield of Faith", "Shield of Faith", "modules/ThandulsTogglableEffects/media/shield-of-faith.jpg", 1, undefined, {}, [
            {key: "data.attributes.ac.value", mode: 2, value: "+2"},
        ]),
        new TogglableEffect("Slow", "Slow", "modules/ThandulsTogglableEffects/media/slow.jpg", 1, undefined, {}, [
            {key: "data.attributes.ac.value", mode: 2, value: "-2"},
            {key: "data.abilities.dex.save", mode: 2, value: "-2"},
            {key: "data.attributes.movement.burrow", mode: 1, value: 0.5, priority: 10},
            {key: "data.attributes.movement.climb", mode: 1, value: 0.5, priority: 10},
            {key: "data.attributes.movement.fly", mode: 1, value: 0.5, priority: 10},
            {key: "data.attributes.movement.swim", mode: 1, value: 0.5, priority: 10},
            {key: "data.attributes.movement.walk", mode: 1, value: 0.5, priority: 10},
        ]),
        new TogglableEffect("Vicious Mockery", "Vicious Mockery", "modules/ThandulsTogglableEffects/media/vicious-mockery.jpg", 0.1, undefined, {
            dae: {
                specialDuration: ["1Attack"]
            }
        }, [
            {key: "flags.midi-qol.disadvantage.attack.all", mode: 2, value: 1},
        ]),
    ];

    static getEnabledEffects() {
        let enabledEffects = this.effects.filter(effect => game.settings.get("ThandulsTogglableEffects", "enabledEffects." + effect.settingsKey));
        if (game.settings.get("ThandulsTogglableEffects", "sortToggles")) {
            enabledEffects = enabledEffects.sort((lhs, rhs) => (lhs.name > rhs.name) ? 1 : ((rhs.name > lhs.name) ? -1 : 0));
        }
        return enabledEffects;
    }

    static handleEffectToggleEvent(toggleEvent) {
        for (const actor of canvas.tokens.controlled.map(token => token.actor)) {
            let toggledEffect = ThandulBuffsAndEffects.getEffectForActor(actor, toggleEvent);
            if (!toggledEffect) { continue; }
            let effectToRemove = Array.from(actor.data.effects.values()).find(effect => effect.data.label == toggledEffect.label);
            effectToRemove ? actor.deleteEmbeddedDocuments("ActiveEffect", [effectToRemove.id]) : actor.createEmbeddedDocuments("ActiveEffect", [toggledEffect]);
        }
    }

    static getEffectForActor(actor, toggleEvent) {
        let togglableEffect = this.effects.find(effect => effect.name == toggleEvent.target.dataset.effectName);
        if (!togglableEffect) { return; }
        
        let effect;
        let customEffectValue;
        switch (togglableEffect.name) {
            case "Rage": effect = this.rage(actor); break;
            case "Shield": effect = this.shield(actor); break;
            case "Hybrid Transformation": effect = this.hybridTransformation(actor); break;
            case "Crimson Rite of the Flame":
            case "Crimson Rite of the Frozen":
            case "Crimson Rite of the Storm":
            case "Crimson Rite of the Dead":
            case "Crimson Rite of the Oracle":
            case "Crimson Rite of the Roar": effect = this.crimsonRite(togglableEffect.name, actor); break;
            
            case "Mage Armor": customEffectValue = isDAEEnabled() ? '13 + @data.abilities.dex.mod' : (13 + actor.data.data.abilities.dex.mod).toString();
            default: effect = togglableEffect.effectDict(customEffectValue); break;
        }
        effect.origin = "Actor." + actor.id;
        return effect;
    }

    static rage(actor) { 
        let rageData = {
            name: "Rage",
            label: "Toggled Effect: Rage",
            icon: "modules/ThandulsTogglableEffects/media/rage.jpg",
            duration: getDurationData(1),
            changes: []
        };
        if (!actor) { return rageData; }
        const classItem = actor.data.items.find(item => item.type === "class" && item.name === "Barbarian");
        if (!classItem) { ui.notifications.warn("Selected actor is not a Barbarian"); return {}; }
        let rageDamageBonus = "+2";
        if (classItem.levels > 15) { rageDamageBonus = "+4" }
        else if (classItem.levels > 8) { rageDamageBonus = "+3" }
        rageData.changes.push(
            ...[
                {key: "flags.midi-qol.advantage.ability.check.str", mode: 2, value: 1},
                {key: "flags.midi-qol.advantage.ability.save.str", mode: 2, value: 1},
                {key: "data.bonuses.mwak.damage", mode: 2, value: rageDamageBonus},
                {key: "data.traits.dr.value", mode: 2, value: "bludgeoning"},
                {key: "data.traits.dr.value", mode: 2, value: "piercing"},
                {key: "data.traits.dr.value", mode: 2, value: "slashing"},
            ]
        );
        if(classItem.data.subclass === "Path of the Totem Warrior") {
            rageData.changes.push(
                ...[
                    {key: "data.traits.dr.value", mode: 2, value: "acid"},
                    {key: "data.traits.dr.value", mode: 2, value: "cold"},
                    {key: "data.traits.dr.value", mode: 2, value: "fire"},
                    {key: "data.traits.dr.value", mode: 2, value: "force"},
                    {key: "data.traits.dr.value", mode: 2, value: "lightning"},
                    {key: "data.traits.dr.value", mode: 2, value: "necrotic"},
                    {key: "data.traits.dr.value", mode: 2, value: "poison"},
                    {key: "data.traits.dr.value", mode: 2, value: "physical"},
                    {key: "data.traits.dr.value", mode: 2, value: "radiant"},
                    {key: "data.traits.dr.value", mode: 2, value: "thunder"}
                ]
            );
        }
        return rageData;
    }

    static shield(actor=undefined) {
        let currentCombat = game.combats.combats.find(combat => combat.combatants.map(combatant => combatant.actor.id).includes(actor != undefined ? actor.id : ''));
        let combatantCount = currentCombat != undefined ? currentCombat.combatants.length : 0;
        return {
            name: "Shield",
            label: "Toggled Effect: Shield",
            icon: "modules/ThandulsTogglableEffects/media/shield.jpg",
            duration: getDurationData(0.1, combatantCount + 1),
            flags: {
                dae: {
                    specialDuration: ["turnStart"]
                }
            },
            changes: [
                {key: "data.attributes.ac.value", mode: 2, value: "+5"},
              ],
        };
    }

    static hybridTransformation(actor=undefined) {
        let currentCombat = game.combats.combats.find(combat => combat.combatants.map(combatant => combatant.actor.id).includes(actor != undefined ? actor.id : ''));
        let combatantCount = currentCombat != undefined ? currentCombat.combatants.length : 0;
        let damageBonus = "";
        if (actor.data.data.details.level < 11) {
            damageBonus = "+1";
        } else if (actor.data.data.details.level < 18) {
            damageBonus = "+2";
        } else {
            damageBonus = "+3";
        }
        let acBonus = "+1";
        if (actor.data.items.filter(item => item.data.armor != undefined).find(armor => armor.data.armor.type == "heavy" && armor.data.equipped) != undefined) {
            acBonus = "+0";
        }
        return {
            name: "Hybrid Transformation",
            label: "Toggled Effect: Hybrid Transformation",
            icon: "modules/ThandulsTogglableEffects/media/hybrid-transformation.jpg",
            duration: getDurationData(60),
            changes: [
                {key: "data.bonuses.mwak.damage", mode: 2, value: damageBonus},
                {key: "data.traits.dr.custom", mode: 2, value: "Resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks not made with silver weapons."},
                {key: "data.attributes.ac.value", mode: 2, value: acBonus},
              ],
        };
    }

    static crimsonRite(name="", actor=undefined) {
        let damageBonus = "";
        if (actor.data.data.details.level < 5) {
            damageBonus = "+1d4";
        } else if (actor.data.data.details.level < 11) {
            damageBonus = "+1d6";
        } else if (actor.data.data.details.level < 17) {
            damageBonus = "+1d8";
        } else {
            damageBonus = "+1d10";
        }
        return {
            name: name,
            label: "Toggled Effect: " + name,
            icon: "modules/ThandulsTogglableEffects/media/" + name.toLowerCase().replaceAll(" ", "-") + ".png",
            duration: getDurationData(480),
            changes: [
                {key: "data.bonuses.weapon.damage", mode: 2, value: damageBonus},
              ],
        };
    }
}