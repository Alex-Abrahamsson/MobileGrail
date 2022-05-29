import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Pressable,
  ImageBackground,
  Dimensions,
  ScrollView,
  Modal
} from "react-native";
import {BuildBanner} from "../components/BuildBanner";


const backgroundImage = "../assets/GrailBg.jpg";
const WIDTH = Dimensions.get("window").width;

function BuildsScreen({ navigation }) {


    return (
      <ImageBackground
        source={require(backgroundImage)}
        style={styles.background}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View>
              <Text style={styles.classText}>Sorceress</Text>
              <BuildBanner
                class="Sorceress"
                tierLetter="S"
                build="Frozen Orb"
                skillPix={[
                  { src: require(`../assets/Sorc/FrozenOrb.png`),points: "20",},
                  { src: require(`../assets/Sorc/IceBlast.png`), points: "20" },
                  { src: require(`../assets/Sorc/IceBolt.png`), points: "20" },
                  { src: require(`../assets/Sorc/ColdMastery.png`), points: "20",},
                  { src: require(`../assets/Sorc/Warmth.png`), points: "20" },
                  { src: require(`../assets/Sorc/Teleport.png`), points: "1" },
                  { src: require(`../assets/Sorc/EnergyShield.png`),points: "1",},
                ]}
              />

              <BuildBanner
                class="Sorceress"
                tierLetter="A"
                build="Blizzard"
                skillPix={[
                  { src: require(`../assets/Sorc/Blizzard.png`), points: "20"},
                  { src: require(`../assets/Sorc/FrostNova.png`), points: "20"},
                  { src: require(`../assets/Sorc/IceBlast.png`), points: "20"},
                  { src: require(`../assets/Sorc/IceBolt.png`), points: "20"},
                  { src: require(`../assets/Sorc/ColdMastery.png`), points: "20"},
                  { src: require(`../assets/Sorc/Teleport.png`), points: "1"},
                  { src: require(`../assets/Sorc/EnergyShield.png`), points: "1"},
                ]}
              />

              <BuildBanner
                class="Sorceress"
                tierLetter="A"
                build="MeteOrb"
                skillPix={[
                  { src: require(`../assets/Sorc/FireBolt.png`), points: "1"},
                  { src: require(`../assets/Sorc/FireBall.png`), points: "20"},
                  { src: require(`../assets/Sorc/Meteor.png`), points: "20"},
                  { src: require(`../assets/Sorc/FireMastery.png`), points: "20"},
                  { src: require(`../assets/Sorc/FrozenArmor.png`), points: "1"},
                  { src: require(`../assets/Sorc/FrozenOrb.png`), points: "20"},
                  { src: require(`../assets/Sorc/ColdMastery.png`), points: "5"},
                  { src: require(`../assets/Sorc/Teleport.png`), points: "1"},
                ]}
              />

              <BuildBanner
                class="Sorceress"
                tierLetter="A"
                build="Chain Lightning"
                skillPix={[
                  { src: require(`../assets/Sorc/ChargedBolt.png`), points: "20"},
                  { src: require(`../assets/Sorc/Lightning.png`), points: "20"},
                  { src: require(`../assets/Sorc/ChainLightning.png`), points: "20"},
                  { src: require(`../assets/Sorc/Nova.png`), points: "20"},
                  { src: require(`../assets/Sorc/LightningMastery.png`), points: "20"},
                  { src: require(`../assets/Sorc/Teleport.png`), points: "1"},
                  { src: require(`../assets/Sorc/EnergyShield.png`), points: "1"},
                ]}
              />

              <BuildBanner
                class="Sorceress"
                tierLetter="A"
                build="Blizzard MF%"
                skillPix={[
                  { src: require(`../assets/Sorc/Blizzard.png`), points: "20"},
                  { src: require(`../assets/Sorc/FrostNova.png`), points: "20"},
                  { src: require(`../assets/Sorc/GlacialSpike.png`), points: "20"},
                  { src: require(`../assets/Sorc/IceBlast.png`), points: "20"},
                  { src: require(`../assets/Sorc/IceBolt.png`), points: "20"},
                  { src: require(`../assets/Sorc/ColdMastery.png`), points: "20"},
                  { src: require(`../assets/Sorc/Teleport.png`), points: "1"},
                  { src: require(`../assets/Sorc/EnergyShield.png`), points: "1"},
                ]}
              />

              <BuildBanner
                class="Sorceress"
                tierLetter="B"
                build="Firewall"
                skillPix={[
                  { src: require(`../assets/Sorc/Inferno.png`), points: "20"},
                  { src: require(`../assets/Sorc/Blaze.png`), points: "20"},
                  { src: require(`../assets/Sorc/FireWall.png`), points: "20"},
                  { src: require(`../assets/Sorc/FireMastery.png`), points: "20"},
                  { src: require(`../assets/Sorc/FrozenOrb.png`), points: "20"},
                  { src: require(`../assets/Sorc/Teleport.png`), points: "1"},
                  { src: require(`../assets/Sorc/EnergyShield.png`), points: "1"},
                ]}
              />

              <BuildBanner
                class="Sorceress"
                tierLetter="C"
                build="Melee Enchantress"
                skillPix={[
                  { src: require(`../assets/Sorc/Telekinesis.png`), points: "20"},
                  { src: require(`../assets/Sorc/EnergyShield.png`), points: "20"},
                  { src: require(`../assets/Sorc/Warmth.png`), points: "20"},
                  { src: require(`../assets/Sorc/Enchant.png`), points: "10"},
                  { src: require(`../assets/Sorc/Teleport.png`), points: "1"},
                  { src: require(`../assets/Sorc/FrozenArmor.png`), points: "10"},
                ]}
              />

              <Text style={styles.classText}>Barbarian</Text>
              <BuildBanner
                class="Barbarian"
                tierLetter="A"
                build="Whirlwind"
                skillPix={[
                  { src: require(`../assets/Barb/Whirlwind.png`), points: "20"},
                  { src: require(`../assets/Barb/SwordMastery.png`), points: "20"},
                  { src: require(`../assets/Barb/BattleOrders.png`), points: "20"},
                  { src: require(`../assets/Barb/Shout.png`), points: "20"},
                  { src: require(`../assets/Barb/NaturalResistance.png`), points: "5"},
                  { src: require(`../assets/Barb/IncreasedSpeed.png`), points: "5"},
                  { src: require(`../assets/Barb/IronSkin.png`), points: "5"},
                  { src: require(`../assets/Barb/Berserk.png`), points: "1"},
                  { src: require(`../assets/Barb/BattleCommand.png`), points: "1"},
                ]}
              />

              <BuildBanner
                class="Barbarian"
                tierLetter="A"
                build="Frenzy"
                skillPix={[
                  { src: require(`../assets/Barb/Frenzy.png`), points: "20"},
                  { src: require(`../assets/Barb/SwordMastery.png`), points: "20"},
                  { src: require(`../assets/Barb/BattleOrders.png`), points: "20"},
                  { src: require(`../assets/Barb/DoubleSwing.png`), points: "20"},
                  { src: require(`../assets/Barb/Taunt.png`), points: "20"},
                  { src: require(`../assets/Barb/IncreasedSpeed.png`), points: "1"},
                  { src: require(`../assets/Barb/BattleCommand.png`), points: "1"},
                ]}
              />

              <BuildBanner
                class="Barbarian"
                tierLetter="A"
                build="Whirlwind MF%"
                skillPix={[
                  { src: require(`../assets/Barb/Whirlwind.png`), points: "20"},
                  { src: require(`../assets/Barb/SwordMastery.png`), points: "20"},
                  { src: require(`../assets/Barb/BattleOrders.png`), points: "20"},
                  { src: require(`../assets/Barb/Shout.png`), points: "20"},
                  { src: require(`../assets/Barb/NaturalResistance.png`), points: "1"},
                  { src: require(`../assets/Barb/IncreasedSpeed.png`), points: "1"},
                  { src: require(`../assets/Barb/BattleCommand.png`), points: "1"},
                ]}
              />
              <BuildBanner
                class="Barbarian"
                tierLetter="A"
                build="Berserker"
                skillPix={[
                  { src: require(`../assets/Barb/Berserk.png`), points: "20"},
                  { src: require(`../assets/Barb/SwordMastery.png`), points: "20"},
                  { src: require(`../assets/Barb/BattleOrders.png`), points: "20"},
                  { src: require(`../assets/Barb/Shout.png`), points: "20"},
                  { src: require(`../assets/Barb/Howl.png`), points: "20"},
                  { src: require(`../assets/Barb/Whirlwind.png`), points: "1"},
                  { src: require(`../assets/Barb/IncreasedSpeed.png`), points: "1"},
                  { src: require(`../assets/Barb/NaturalResistance.png`), points: "1"},
                  { src: require(`../assets/Barb/IronSkin.png`), points: "1"},
                  { src: require(`../assets/Barb/BattleCommand.png`), points: "1"},
                ]}
              />
              <BuildBanner
                class="Barbarian"
                tierLetter="A"
                build="Thrower"
                skillPix={[
                  { src: require(`../assets/Barb/DoubleThrow.png`), points: "20"},
                  { src: require(`../assets/Barb/DoubleSwing.png`), points: "20"},
                  { src: require(`../assets/Barb/ThrowingMastery.png`), points: "20"},
                  { src: require(`../assets/Barb/BattleOrders.png`), points: "20"},
                  { src: require(`../assets/Barb/Shout.png`), points: "5"},
                  { src: require(`../assets/Barb/NaturalResistance.png`), points: "5"},
                  { src: require(`../assets/Barb/IncreasedSpeed.png`), points: "5"},
                  { src: require(`../assets/Barb/IronSkin.png`), points: "5"},
                  { src: require(`../assets/Barb/Berserk.png`), points: "1"},
                  { src: require(`../assets/Barb/BattleCommand.png`), points: "1"},
                ]}
              />

              <Text style={styles.classText}>Necromancer</Text>
              <BuildBanner
                class="Necromancer"
                tierLetter="S"
                build="Summoner"
                skillPix={[
                  { src: require(`../assets/Necro/RaiseSkeleton.png`), points: "20"},
                  { src: require(`../assets/Necro/SkeletonMastery.png`), points: "20"},
                  { src: require(`../assets/Necro/CorpseExplosion.png`), points: "20"},
                  { src: require(`../assets/Necro/RaiseSkeletalMage.png`), points: "20"},
                  { src: require(`../assets/Necro/GolemMastery.png`), points: "20"},
                  { src: require(`../assets/Necro/FireGolem.png`), points: "1"},
                  { src: require(`../assets/Necro/LowerResist.png`), points: "1"},
                  { src: require(`../assets/Necro/AmplifyDamage.png`), points: "1"},
                  { src: require(`../assets/Necro/DimVision.png`), points: "3"},
                ]}
              />
              <BuildBanner
                class="Necromancer"
                tierLetter="S"
                build="Summoner MF%"
                skillPix={[
                  { src: require(`../assets/Necro/RaiseSkeleton.png`), points: "20"},
                  { src: require(`../assets/Necro/SkeletonMastery.png`), points: "20"},
                  { src: require(`../assets/Necro/CorpseExplosion.png`), points: "20"},
                  { src: require(`../assets/Necro/RaiseSkeletalMage.png`), points: "20"},
                  { src: require(`../assets/Necro/IronGolem.png`), points: "20"},
                  { src: require(`../assets/Necro/LowerResist.png`), points: "1"},
                  { src: require(`../assets/Necro/AmplifyDamage.png`), points: "1"},
                  { src: require(`../assets/Necro/DimVision.png`), points: "3"},
                ]}
              />
              <BuildBanner
                class="Necromancer"
                tierLetter="A"
                build="Bones"
                skillPix={[
                  { src: require(`../assets/Necro/Teeth.png`), points: "20"},
                  { src: require(`../assets/Necro/BoneSpear.png`), points: "20"},
                  { src: require(`../assets/Necro/BoneSpirit.png`), points: "20"},
                  { src: require(`../assets/Necro/BoneWall.png`), points: "20"},
                  { src: require(`../assets/Necro/BonePrison.png`), points: "20"},
                  { src: require(`../assets/Necro/AmplifyDamage.png`), points: "1"},
                  { src: require(`../assets/Necro/BoneArmor.png`), points: "1"},
                  { src: require(`../assets/Necro/Revive.png`), points: "1"},
                  { src: require(`../assets/Necro/ClayGolem.png`), points: "1"},
                ]}
              />
              <BuildBanner
                class="Necromancer"
                tierLetter="A"
                build="Poison Nova"
                skillPix={[
                  { src: require(`../assets/Necro/PoisonDagger.png`), points: "20"},
                  { src: require(`../assets/Necro/PoisonExplosion.png`), points: "20"},
                  { src: require(`../assets/Necro/PoisonNova.png`), points: "20"},
                  { src: require(`../assets/Necro/CorpseExplosion.png`), points: "20"},
                  { src: require(`../assets/Necro/BoneArmor.png`), points: "10"},
                  { src: require(`../assets/Necro/LowerResist.png`), points: "1"},
                  { src: require(`../assets/Necro/ClayGolem.png`), points: "1"},
                  { src: require(`../assets/Necro/Revive.png`), points: "1"},
                ]}
              />
              <BuildBanner
                class="Necromancer"
                tierLetter="B"
                build="Exploder"
                skillPix={[
                  { src: require(`../assets/Necro/CorpseExplosion.png`), points: "20"},
                  { src: require(`../assets/Necro/AmplifyDamage.png`), points: "20"},
                  { src: require(`../assets/Necro/BoneWall.png`), points: "20"},
                  { src: require(`../assets/Necro/BonePrison.png`), points: "10"},
                  { src: require(`../assets/Necro/BoneArmor.png`), points: "1"},
                  { src: require(`../assets/Necro/GolemMastery.png`), points: "20"},
                  { src: require(`../assets/Necro/FireGolem.png`), points: "2"},
                  { src: require(`../assets/Necro/SummonResist.png`), points: "3"},
                ]}
              />

              <Text style={styles.classText}>Paladin</Text>
              <BuildBanner
                class="Paladin"
                tierLetter="S"
                build="Hammerdin"
                skillPix={[
                  { src: require(`../assets/Pala/BlessedHammer.png`), points: "20"},
                  { src: require(`../assets/Pala/Vigor.png`), points: "20"},
                  { src: require(`../assets/Pala/BlessedAim.png`), points: "20"},
                  { src: require(`../assets/Pala/Concentration.png`), points: "20"},
                  { src: require(`../assets/Pala/HolyShield.png`), points: "20"},
                ]}
              />
              <BuildBanner
                class="Paladin"
                tierLetter="S"
                build="Hammerdin MF%"
                skillPix={[
                  { src: require(`../assets/Pala/BlessedHammer.png`), points: "20"},
                  { src: require(`../assets/Pala/Vigor.png`), points: "20"},
                  { src: require(`../assets/Pala/BlessedAim.png`), points: "20"},
                  { src: require(`../assets/Pala/Concentration.png`), points: "20"},
                  { src: require(`../assets/Pala/HolyShield.png`), points: "20"},
                ]}
              />
              <BuildBanner
                class="Paladin"
                tierLetter="A"
                build="Fist Of Heaven"
                skillPix={[
                  { src: require(`../assets/Pala/FistOfHeavens.png`), points: "20"},
                  { src: require(`../assets/Pala/HolyShock.png`), points: "20"},
                  { src: require(`../assets/Pala/HolyBolt.png`), points: "20"},
                  { src: require(`../assets/Pala/HolyShield.png`), points: "10"},
                  { src: require(`../assets/Pala/Conviction.png`), points: "10"},
                  { src: require(`../assets/Pala/Smite.png`), points: "1"},
                ]}
              />
              <BuildBanner
                class="Paladin"
                tierLetter="A"
                build="Smiter"
                skillPix={[
                  { src: require(`../assets/Pala/Smite.png`), points: "20"},
                  { src: require(`../assets/Pala/HolyShield.png`), points: "20"},
                  { src: require(`../assets/Pala/Fanaticism.png`), points: "20"},
                  { src: require(`../assets/Pala/Vengeance.png`), points: "20"},
                  { src: require(`../assets/Pala/ResistFire.png`), points: "20"},
                ]}
              />
              <BuildBanner
                class="Paladin"
                tierLetter="A"
                build="Zealer"
                skillPix={[
                  { src: require(`../assets/Pala/Sacrifice.png`), points: "20"},
                  { src: require(`../assets/Pala/Defiance.png`), points: "20"},
                  { src: require(`../assets/Pala/Zeal.png`), points: "20"},
                  { src: require(`../assets/Pala/HolyShield.png`), points: "20"},
                  { src: require(`../assets/Pala/Fanaticism.png`), points: "20"},
                ]}
              />

              <Text style={styles.classText}>Amazon</Text>
              <BuildBanner
                class="Amazon"
                tierLetter="A"
                build="Archer"
                skillPix={[
                  { src: require(`../assets/Ama/Strafe.png`), points: "20"},
                  { src: require(`../assets/Ama/MultipleShot.png`), points: "20"},
                  { src: require(`../assets/Ama/Valkyrie.png`), points: "20"},
                  { src: require(`../assets/Ama/Penetrate.png`), points: "5"},
                  { src: require(`../assets/Ama/CriticalStrike.png`), points: "5"},
                  { src: require(`../assets/Ama/Pierce.png`), points: "5"},
                  { src: require(`../assets/Ama/Avoid.png`), points: "5"},
                  { src: require(`../assets/Ama/Evade.png`), points: "5"},
                  { src: require(`../assets/Ama/Dodge.png`), points: "5"},
                ]}
              />
              <BuildBanner
                class="Amazon"
                tierLetter="A"
                build="Light FuryZon"
                skillPix={[
                  { src: require(`../assets/Ama/ChargedStrike.png`), points: "20"},
                  { src: require(`../assets/Ama/LightningStrike.png`), points: "20"},
                  { src: require(`../assets/Ama/LightningFury.png`), points: "20"},
                  { src: require(`../assets/Ama/PowerStrike.png`), points: "20"},
                  { src: require(`../assets/Ama/Pierce.png`), points: "5"},
                  { src: require(`../assets/Ama/CriticalStrike.png`), points: "5"},
                  { src: require(`../assets/Ama/Evade.png`), points: "5"},
                  { src: require(`../assets/Ama/Avoid.png`), points: "5"},
                  { src: require(`../assets/Ama/Dodge.png`), points: "5"},
                ]}
              />
              <BuildBanner
                class="Amazon"
                tierLetter="A"
                build="Ice BowaZon"
                skillPix={[
                  { src: require(`../assets/Ama/ColdArrow.png`), points: "20"},
                  { src: require(`../assets/Ama/IceArrow.png`), points: "20"},
                  { src: require(`../assets/Ama/FreezingArrow.png`), points: "20"},
                  { src: require(`../assets/Ama/Valkyrie.png`), points: "20"},
                  { src: require(`../assets/Ama/CriticalStrike.png`), points: "5"},
                  { src: require(`../assets/Ama/Pierce.png`), points: "5"},
                  { src: require(`../assets/Ama/Avoid.png`), points: "5"},
                  { src: require(`../assets/Ama/Evade.png`), points: "5"},
                ]}
              />
              <BuildBanner
                class="Amazon"
                tierLetter="B"
                build="Fire BowaZon"
                skillPix={[
                  { src: require(`../assets/Ama/ImmolationArrow.png`), points: "20"},
                  { src: require(`../assets/Ama/ExplodingArrow.png`), points: "20"},
                  { src: require(`../assets/Ama/FireArrow.png`), points: "20"},
                  { src: require(`../assets/Ama/Valkyrie.png`), points: "20"},
                  { src: require(`../assets/Ama/CriticalStrike.png`), points: "5"},
                  { src: require(`../assets/Ama/Pierce.png`), points: "5"},
                  { src: require(`../assets/Ama/Avoid.png`), points: "5"},
                  { src: require(`../assets/Ama/Evade.png`), points: "5"},
                ]}
              />
              <BuildBanner
                class="Amazon"
                tierLetter="B"
                build="Poison"
                skillPix={[
                  { src: require(`../assets/Ama/PlagueJavelin.png`), points: "20"},
                  { src: require(`../assets/Ama/PoisonJavelin.png`), points: "20"},
                  { src: require(`../assets/Ama/Valkyrie.png`), points: "20"},
                  { src: require(`../assets/Ama/Pierce.png`), points: "10"},
                  { src: require(`../assets/Ama/CriticalStrike.png`), points: "5"},
                  { src: require(`../assets/Ama/Penetrate.png`), points: "5"},
                  { src: require(`../assets/Ama/Evade.png`), points: "5"},
                  { src: require(`../assets/Ama/Avoid.png`), points: "5"},
                  { src: require(`../assets/Ama/Dodge.png`), points: "5"},
                  { src: require(`../assets/Ama/LightningFury.png`), points: "5"},
                ]}
              />

              <Text style={styles.classText}>Assassin</Text>
              <BuildBanner
                class="Assassin"
                tierLetter="A"
                build="Trapsin"
                skillPix={[
                  { src: require(`../assets/Assa/FireBlast.png`), points: "20"},
                  { src: require(`../assets/Assa/ShockWeb.png`), points: "20"},
                  { src: require(`../assets/Assa/ChargedBoltSentry.png`), points: "20"},
                  { src: require(`../assets/Assa/LightningSentry.png`), points: "20"},
                  { src: require(`../assets/Assa/DeathSentry.png`), points: "-"},
                  { src: require(`../assets/Assa/WeaponBlock.png`), points: "5"},
                  { src: require(`../assets/Assa/BurstOfSpeed.png`), points: "1"},
                  { src: require(`../assets/Assa/MindBlast.png`), points: "1"},
                ]}
              />
              <BuildBanner
                class="Assassin"
                tierLetter="B"
                build="WhirlWind Assa"
                skillPix={[
                  { src: require(`../assets/Assa/ShadowMaster.png`), points: "20"},
                  { src: require(`../assets/Assa/Venom.png`), points: "20"},
                  { src: require(`../assets/Assa/ClawMastery.png`), points: "20"},
                  { src: require(`../assets/Assa/Fade.png`), points: "20"},
                  { src: require(`../assets/Assa/WeaponBlock.png`), points: "1"},
                  { src: require(`../assets/Assa/DragonFlight.png`), points: "1"},
                  { src: require(`../assets/Assa/BurstOfSpeed.png`), points: "1"},
                  { src: require(`../assets/Assa/BladeSentinel.png`), points: "+1"},
                ]}
              />
              <BuildBanner
                class="Assassin"
                tierLetter="B"
                build="Elemental Assa"
                skillPix={[
                  { src: require(`../assets/Assa/PhoenixStrike.png`), points: "20"},
                  { src: require(`../assets/Assa/DragonTalon.png`), points: "20"},
                  { src: require(`../assets/Assa/DeathSentry.png`), points: "19"},
                  { src: require(`../assets/Assa/ShadowMaster.png`), points: "17"},
                  { src: require(`../assets/Assa/ClawMastery.png`), points: "16"},
                  { src: require(`../assets/Assa/BurstOfSpeed.png`), points: "1"},
                ]}
              />

              <Text style={styles.classText}>Druid</Text>
              <BuildBanner
                class="Druid"
                tierLetter="A"
                build="Wind Druid"
                skillPix={[
                  { src: require(`../assets/Drod/CycloneArmor.png`), points: "20"},
                  { src: require(`../assets/Drod/Twister.png`), points: "20"},
                  { src: require(`../assets/Drod/Tornado.png`), points: "20"},
                  { src: require(`../assets/Drod/Hurricane.png`), points: "20"},
                  { src: require(`../assets/Drod/OakSage.png`), points: "20"},
                ]}
              />
              <BuildBanner
                class="Druid"
                tierLetter="A"
                build="Fire Druid"
                skillPix={[
                  { src: require(`../assets/Drod/Firestorm.png`), points: "20"},
                  { src: require(`../assets/Drod/MoltenBoulder.png`), points: "20"},
                  { src: require(`../assets/Drod/Fissure.png`), points: "20"},
                  { src: require(`../assets/Drod/Volcano.png`), points: "20"},
                  { src: require(`../assets/Drod/Armageddon.png`), points: "20"},
                  { src: require(`../assets/Drod/OakSage.png`), points: "1"},
                ]}
              />
              <BuildBanner
                class="Druid"
                tierLetter="B"
                build="Rabies Druid"
                skillPix={[
                  { src: require(`../assets/Drod/Rabies.png`), points: "20"},
                  { src: require(`../assets/Drod/PoisonCreeper.png`), points: "20"},
                  { src: require(`../assets/Drod/Lycanthropy.png`), points: "20"},
                  { src: require(`../assets/Drod/HeartofWolverine.png`), points: "20"},
                  { src: require(`../assets/Drod/Werewolf.png`), points: "20"},
                ]}
              />
              <BuildBanner
                class="Druid"
                tierLetter="B"
                build="Werewolf Druid"
                skillPix={[
                  { src: require(`../assets/Drod/Fury.png`), points: "20"},
                  { src: require(`../assets/Drod/Hurricane.png`), points: "20"},
                  { src: require(`../assets/Drod/Lycanthropy.png`), points: "20"},
                  { src: require(`../assets/Drod/HeartofWolverine.png`), points: "20"},
                  { src: require(`../assets/Drod/Werewolf.png`), points: "20"},
                ]}
              />
              <BuildBanner
                class="Druid"
                tierLetter="B"
                build="Full Zoo Druid"
                skillPix={[
                  { src: require(`../assets/Drod/Raven.png`), points: "20"},
                  { src: require(`../assets/Drod/SummonDireWolf.png`), points: "20"},
                  { src: require(`../assets/Drod/SummonSpiritWolf.png`), points: "20"},
                  { src: require(`../assets/Drod/SummonGrizzly.png`), points: "20"},
                  { src: require(`../assets/Drod/HeartofWolverine.png`), points: "20"},
                  { src: require(`../assets/Drod/CarrionVine.png`), points: "1"},
                ]}
              />
              <BuildBanner
                class="Druid"
                tierLetter="B"
                build="WhereBear"
                skillPix={[
                  { src: require(`../assets/Drod/Werebear.png`), points: "20"},
                  { src: require(`../assets/Drod/Lycanthropy.png`), points: "20"},
                  { src: require(`../assets/Drod/FireClaws.png`), points: "20"},
                  { src: require(`../assets/Drod/Firestorm.png`), points: "20"},
                  { src: require(`../assets/Drod/Rabies.png`), points: "1"},
                  { src: require(`../assets/Drod/Fury.png`), points: "1"},
                  { src: require(`../assets/Drod/Hunger.png`), points: "1"},
                ]}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  headText: {
    color: "white",
    fontSize: 22,
  },
  classText: {
    color: "white",
    paddingTop:20
  },
  buildBtns: {
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "#0007",
    width: WIDTH - 50,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  bannerView: {
    flexDirection: "row",
    flex: 1,
  },
  tierView: {
    marginLeft: 5,
  },
  spellView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  spellImage: {
    height: 20,
    width: 20,
  },
});


export default BuildsScreen;