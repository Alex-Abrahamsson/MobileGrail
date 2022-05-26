import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import {BuildBanner} from "../components/BuildBanner";


const backgroundImage = "../assets/GrailBg.jpg";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = 100;

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
                tierLetter="S"
                build="Frozen Orb"
                skillPix={[
                  { src: require(`../assets/Sorc/FrozenOrb.png`) },
                  { src: require(`../assets/Sorc/IceBlast.png`) },
                  { src: require(`../assets/Sorc/IceBolt.png`) },
                  { src: require(`../assets/Sorc/ColdMastery.png`) },
                  { src: require(`../assets/Sorc/Warmth.png`) },
                  { src: require(`../assets/Sorc/Teleport.png`) },
                  { src: require(`../assets/Sorc/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Blizzard Build"
                skillPix={[
                  { src: require(`../assets/Sorc/Blizzard.png`) },
                  { src: require(`../assets/Sorc/FrostNova.png`) },
                  { src: require(`../assets/Sorc/IceBlast.png`) },
                  { src: require(`../assets/Sorc/IceBolt.png`) },
                  { src: require(`../assets/Sorc/ColdMastery.png`) },
                  { src: require(`../assets/Sorc/Teleport.png`) },
                  { src: require(`../assets/Sorc/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Fire MeteOrb"
                skillPix={[
                  { src: require(`../assets/Sorc/FireBolt.png`) },
                  { src: require(`../assets/Sorc/FireBall.png`) },
                  { src: require(`../assets/Sorc/Meteor.png`) },
                  { src: require(`../assets/Sorc/FireMastery.png`) },
                  { src: require(`../assets/Sorc/FrozenArmor.png`) },
                  { src: require(`../assets/Sorc/FrozenOrb.png`) },
                  { src: require(`../assets/Sorc/ColdMastery.png`) },
                  { src: require(`../assets/Sorc/Teleport.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Chain Lightning"
                skillPix={[
                  { src: require(`../assets/Sorc/ChargedBolt.png`) },
                  { src: require(`../assets/Sorc/Lightning.png`) },
                  { src: require(`../assets/Sorc/ChainLightning.png`) },
                  { src: require(`../assets/Sorc/Nova.png`) },
                  { src: require(`../assets/Sorc/LightningMastery.png`) },
                  { src: require(`../assets/Sorc/Teleport.png`) },
                  { src: require(`../assets/Sorc/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Blizzard MF%"
                skillPix={[
                  { src: require(`../assets/Sorc/Blizzard.png`) },
                  { src: require(`../assets/Sorc/FrostNova.png`) },
                  { src: require(`../assets/Sorc/GlacialSpike.png`) },
                  { src: require(`../assets/Sorc/IceBlast.png`) },
                  { src: require(`../assets/Sorc/IceBolt.png`) },
                  { src: require(`../assets/Sorc/ColdMastery.png`) },
                  { src: require(`../assets/Sorc/Teleport.png`) },
                  { src: require(`../assets/Sorc/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="B"
                build="Firewall"
                skillPix={[
                  { src: require(`../assets/Sorc/Inferno.png`) },
                  { src: require(`../assets/Sorc/Blaze.png`) },
                  { src: require(`../assets/Sorc/FireWall.png`) },
                  { src: require(`../assets/Sorc/FireMastery.png`) },
                  { src: require(`../assets/Sorc/FrozenOrb.png`) },
                  { src: require(`../assets/Sorc/Teleport.png`) },
                  { src: require(`../assets/Sorc/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="C"
                build="Melee Enchantress"
                skillPix={[
                  { src: require(`../assets/Sorc/Telekinesis.png`) },
                  { src: require(`../assets/Sorc/EnergyShield.png`) },
                  { src: require(`../assets/Sorc/Warmth.png`) },
                  { src: require(`../assets/Sorc/Enchant.png`) },
                  { src: require(`../assets/Sorc/Teleport.png`) },
                  { src: require(`../assets/Sorc/FrozenArmor.png`) },
                ]}
              />

              <Text style={styles.classText}>Barbarian</Text>
              <BuildBanner
                tierLetter="A"
                build="Whirlwind"
                skillPix={[
                  { src: require(`../assets/Barb/Whirlwind.png`) },
                  { src: require(`../assets/Barb/SwordMastery.png`) },
                  { src: require(`../assets/Barb/BattleOrders.png`) },
                  { src: require(`../assets/Barb/Shout.png`) },
                  { src: require(`../assets/Barb/NaturalResistance.png`) },
                  { src: require(`../assets/Barb/IncreasedSpeed.png`) },
                  { src: require(`../assets/Barb/IronSkin.png`) },
                  { src: require(`../assets/Barb/Berserk.png`) },
                  { src: require(`../assets/Barb/BattleCommand.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Frenzy"
                skillPix={[
                  { src: require(`../assets/Barb/Frenzy.png`) },
                  { src: require(`../assets/Barb/SwordMastery.png`) },
                  { src: require(`../assets/Barb/BattleOrders.png`) },
                  { src: require(`../assets/Barb/DoubleSwing.png`) },
                  { src: require(`../assets/Barb/Taunt.png`) },
                  { src: require(`../assets/Barb/IncreasedSpeed.png`) },
                  { src: require(`../assets/Barb/BattleCommand.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Whirlwind MF%"
                skillPix={[
                  { src: require(`../assets/Barb/Whirlwind.png`) },
                  { src: require(`../assets/Barb/SwordMastery.png`) },
                  { src: require(`../assets/Barb/BattleOrders.png`) },
                  { src: require(`../assets/Barb/Shout.png`) },
                  { src: require(`../assets/Barb/NaturalResistance.png`) },
                  { src: require(`../assets/Barb/IncreasedSpeed.png`) },
                  { src: require(`../assets/Barb/BattleCommand.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Berserker"
                skillPix={[
                  { src: require(`../assets/Barb/Berserk.png`) },
                  { src: require(`../assets/Barb/SwordMastery.png`) },
                  { src: require(`../assets/Barb/BattleOrders.png`) },
                  { src: require(`../assets/Barb/Shout.png`) },
                  { src: require(`../assets/Barb/Howl.png`) },
                  { src: require(`../assets/Barb/Whirlwind.png`) },
                  { src: require(`../assets/Barb/IncreasedSpeed.png`) },
                  { src: require(`../assets/Barb/NaturalResistance.png`) },
                  { src: require(`../assets/Barb/IronSkin.png`) },
                  { src: require(`../assets/Barb/BattleCommand.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Thrower"
                skillPix={[
                  { src: require(`../assets/Barb/DoubleThrow.png`) },
                  { src: require(`../assets/Barb/DoubleSwing.png`) },
                  { src: require(`../assets/Barb/ThrowingMastery.png`) },
                  { src: require(`../assets/Barb/BattleOrders.png`) },
                  { src: require(`../assets/Barb/Shout.png`) },
                  { src: require(`../assets/Barb/NaturalResistance.png`) },
                  { src: require(`../assets/Barb/IncreasedSpeed.png`) },
                  { src: require(`../assets/Barb/IronSkin.png`) },
                  { src: require(`../assets/Barb/Berserk.png`) },
                  { src: require(`../assets/Barb/BattleCommand.png`) },
                ]}
              />

              <Text style={styles.classText}>Necromancer</Text>
              <BuildBanner
                tierLetter="S"
                build="Summoner"
                skillPix={[
                  { src: require(`../assets/Necro/RaiseSkeleton.png`) },
                  { src: require(`../assets/Necro/SkeletonMastery.png`) },
                  { src: require(`../assets/Necro/CorpseExplosion.png`) },
                  { src: require(`../assets/Necro/RaiseSkeletalMage.png`) },
                  { src: require(`../assets/Necro/GolemMastery.png`) },
                  { src: require(`../assets/Necro/FireGolem.png`) },
                  { src: require(`../assets/Necro/LowerResist.png`) },
                  { src: require(`../assets/Necro/AmplifyDamage.png`) },
                  { src: require(`../assets/Necro/DimVision.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="S"
                build="Summoner MF%"
                skillPix={[
                  { src: require(`../assets/Necro/RaiseSkeleton.png`) },
                  { src: require(`../assets/Necro/SkeletonMastery.png`) },
                  { src: require(`../assets/Necro/CorpseExplosion.png`) },
                  { src: require(`../assets/Necro/RaiseSkeletalMage.png`) },
                  { src: require(`../assets/Necro/IronGolem.png`) },
                  { src: require(`../assets/Necro/LowerResist.png`) },
                  { src: require(`../assets/Necro/AmplifyDamage.png`) },
                  { src: require(`../assets/Necro/DimVision.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Bones"
                skillPix={[
                  { src: require(`../assets/Necro/Teeth.png`) },
                  { src: require(`../assets/Necro/BoneSpear.png`) },
                  { src: require(`../assets/Necro/BoneSpirit.png`) },
                  { src: require(`../assets/Necro/BoneWall.png`) },
                  { src: require(`../assets/Necro/BonePrison.png`) },
                  { src: require(`../assets/Necro/AmplifyDamage.png`) },
                  { src: require(`../assets/Necro/BoneArmor.png`) },
                  { src: require(`../assets/Necro/Revive.png`) },
                  { src: require(`../assets/Necro/ClayGolem.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Poison Nova"
                skillPix={[
                  { src: require(`../assets/Necro/PoisonDagger.png`) },
                  { src: require(`../assets/Necro/PoisonExplosion.png`) },
                  { src: require(`../assets/Necro/PoisonNova.png`) },
                  { src: require(`../assets/Necro/CorpseExplosion.png`) },
                  { src: require(`../assets/Necro/BoneArmor.png`) },
                  { src: require(`../assets/Necro/LowerResist.png`) },
                  { src: require(`../assets/Necro/ClayGolem.png`) },
                  { src: require(`../assets/Necro/Revive.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="B"
                build="Exploder"
                skillPix={[
                  { src: require(`../assets/Necro/CorpseExplosion.png`) },
                  { src: require(`../assets/Necro/AmplifyDamage.png`) },
                  { src: require(`../assets/Necro/BoneWall.png`) },
                  { src: require(`../assets/Necro/BonePrison.png`) },
                  { src: require(`../assets/Necro/BoneArmor.png`) },
                  { src: require(`../assets/Necro/GolemMastery.png`) },
                  { src: require(`../assets/Necro/FireGolem.png`) },
                  { src: require(`../assets/Necro/SummonResist.png`) },
                ]}
              />

              <Text style={styles.classText}>Paladin</Text>
              <BuildBanner
                tierLetter="S"
                build="Hammerdin"
                skillPix={[
                  { src: require(`../assets/Pala/BlessedHammer.png`) },
                  { src: require(`../assets/Pala/Vigor.png`) },
                  { src: require(`../assets/Pala/BlessedAim.png`) },
                  { src: require(`../assets/Pala/Concentration.png`) },
                  { src: require(`../assets/Pala/HolyShield.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="S"
                build="Hammerdin MF%"
                skillPix={[
                  { src: require(`../assets/Pala/BlessedHammer.png`) },
                  { src: require(`../assets/Pala/Vigor.png`) },
                  { src: require(`../assets/Pala/BlessedAim.png`) },
                  { src: require(`../assets/Pala/Concentration.png`) },
                  { src: require(`../assets/Pala/HolyShield.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Fist Of Heaven"
                skillPix={[
                  { src: require(`../assets/Pala/FistOfHeavens.png`) },
                  { src: require(`../assets/Pala/HolyShock.png`) },
                  { src: require(`../assets/Pala/HolyBolt.png`) },
                  { src: require(`../assets/Pala/HolyShield.png`) },
                  { src: require(`../assets/Pala/Conviction.png`) },
                  { src: require(`../assets/Pala/Smite.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Smiter"
                skillPix={[
                  { src: require(`../assets/Pala/Smite.png`) },
                  { src: require(`../assets/Pala/HolyShield.png`) },
                  { src: require(`../assets/Pala/Fanaticism.png`) },
                  { src: require(`../assets/Pala/Vengeance.png`) },
                  { src: require(`../assets/Pala/ResistFire.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Zealer"
                skillPix={[
                  { src: require(`../assets/Pala/Sacrifice.png`) },
                  { src: require(`../assets/Pala/Defiance.png`) },
                  { src: require(`../assets/Pala/Zeal.png`) },
                  { src: require(`../assets/Pala/HolyShield.png`) },
                  { src: require(`../assets/Pala/Fanaticism.png`) },
                ]}
              />

              <Text style={styles.classText}>Amazon</Text>
              <BuildBanner
                tierLetter="A"
                build="Archer"
                skillPix={[
                  { src: require(`../assets/Ama/Strafe.png`) },
                  { src: require(`../assets/Ama/MultipleShot.png`) },
                  { src: require(`../assets/Ama/Valkyrie.png`) },
                  { src: require(`../assets/Ama/Penetrate.png`) },
                  { src: require(`../assets/Ama/CriticalStrike.png`) },
                  { src: require(`../assets/Ama/Pierce.png`) },
                  { src: require(`../assets/Ama/Avoid.png`) },
                  { src: require(`../assets/Ama/Evade.png`) },
                  { src: require(`../assets/Ama/Dodge.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Light FuryZon"
                skillPix={[
                  { src: require(`../assets/Ama/ChargedStrike.png`) },
                  { src: require(`../assets/Ama/LightningStrike.png`) },
                  { src: require(`../assets/Ama/LightningFury.png`) },
                  { src: require(`../assets/Ama/PowerStrike.png`) },
                  { src: require(`../assets/Ama/Pierce.png`) },
                  { src: require(`../assets/Ama/CriticalStrike.png`) },
                  { src: require(`../assets/Ama/Evade.png`) },
                  { src: require(`../assets/Ama/Avoid.png`) },
                  { src: require(`../assets/Ama/Dodge.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Ice BowaZon"
                skillPix={[
                  { src: require(`../assets/Ama/ColdArrow.png`) },
                  { src: require(`../assets/Ama/IceArrow.png`) },
                  { src: require(`../assets/Ama/FreezingArrow.png`) },
                  { src: require(`../assets/Ama/Valkyrie.png`) },
                  { src: require(`../assets/Ama/CriticalStrike.png`) },
                  { src: require(`../assets/Ama/Pierce.png`) },
                  { src: require(`../assets/Ama/Avoid.png`) },
                  { src: require(`../assets/Ama/Evade.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="B"
                build="Fire BowaZon"
                skillPix={[
                  { src: require(`../assets/Ama/ImmolationArrow.png`) },
                  { src: require(`../assets/Ama/ExplodingArrow.png`) },
                  { src: require(`../assets/Ama/FireArrow.png`) },
                  { src: require(`../assets/Ama/Valkyrie.png`) },
                  { src: require(`../assets/Ama/CriticalStrike.png`) },
                  { src: require(`../assets/Ama/Pierce.png`) },
                  { src: require(`../assets/Ama/Avoid.png`) },
                  { src: require(`../assets/Ama/Evade.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="B"
                build="Poison"
                skillPix={[
                  { src: require(`../assets/Ama/PlagueJavelin.png`) },
                  { src: require(`../assets/Ama/PoisonJavelin.png`) },
                  { src: require(`../assets/Ama/Valkyrie.png`) },
                  { src: require(`../assets/Ama/Pierce.png`) },
                  { src: require(`../assets/Ama/CriticalStrike.png`) },
                  { src: require(`../assets/Ama/Penetrate.png`) },
                  { src: require(`../assets/Ama/Evade.png`) },
                  { src: require(`../assets/Ama/Avoid.png`) },
                  { src: require(`../assets/Ama/Dodge.png`) },
                  { src: require(`../assets/Ama/LightningFury.png`) },
                ]}
              />

              <Text style={styles.classText}>Assassin</Text>
              <BuildBanner
                tierLetter="A"
                build="Light Trapper"
                skillPix={[
                  { src: require(`../assets/Assa/FireBlast.png`) },
                  { src: require(`../assets/Assa/ShockWeb.png`) },
                  { src: require(`../assets/Assa/ChargedBoltSentry.png`) },
                  { src: require(`../assets/Assa/LightningSentry.png`) },
                  { src: require(`../assets/Assa/DeathSentry.png`) },
                  { src: require(`../assets/Assa/WeaponBlock.png`) },
                  { src: require(`../assets/Assa/BurstOfSpeed.png`) },
                  { src: require(`../assets/Assa/MindBlast.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="B"
                build="WhirlWind Assa"
                skillPix={[
                  { src: require(`../assets/Assa/ShadowMaster.png`) },
                  { src: require(`../assets/Assa/Venom.png`) },
                  { src: require(`../assets/Assa/ClawMastery.png`) },
                  { src: require(`../assets/Assa/Fade.png`) },
                  { src: require(`../assets/Assa/WeaponBlock.png`) },
                  { src: require(`../assets/Assa/DragonFlight.png`) },
                  { src: require(`../assets/Assa/BurstOfSpeed.png`) },
                  { src: require(`../assets/Assa/BladeSentinel.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="B"
                build="Elemental Assa"
                skillPix={[
                  { src: require(`../assets/Assa/PhoenixStrike.png`) },
                  { src: require(`../assets/Assa/DragonTalon.png`) },
                  { src: require(`../assets/Assa/DeathSentry.png`) },
                  { src: require(`../assets/Assa/ShadowMaster.png`) },
                  { src: require(`../assets/Assa/ClawMastery.png`) },
                  { src: require(`../assets/Assa/BurstOfSpeed.png`) },
                ]}
              />

              <Text style={styles.classText}>Druid</Text>
              <BuildBanner
                tierLetter="A"
                build="Tornado"
                skillPix={[
                  { src: require(`../assets/Drod/CycloneArmor.png`) },
                  { src: require(`../assets/Drod/Twister.png`) },
                  { src: require(`../assets/Drod/Tornado.png`) },
                  { src: require(`../assets/Drod/Hurricane.png`) },
                  { src: require(`../assets/Drod/OakSage.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="A"
                build="Fire Druid"
                skillPix={[
                  { src: require(`../assets/Drod/Firestorm.png`) },
                  { src: require(`../assets/Drod/MoltenBoulder.png`) },
                  { src: require(`../assets/Drod/Fissure.png`) },
                  { src: require(`../assets/Drod/Volcano.png`) },
                  { src: require(`../assets/Drod/Armageddon.png`) },
                  { src: require(`../assets/Drod/OakSage.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="B"
                build="Rabies Druid"
                skillPix={[
                  { src: require(`../assets/Drod/Rabies.png`) },
                  { src: require(`../assets/Drod/PoisonCreeper.png`) },
                  { src: require(`../assets/Drod/Lycanthropy.png`) },
                  { src: require(`../assets/Drod/HeartofWolverine.png`) },
                  { src: require(`../assets/Drod/Werewolf.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="B"
                build="Werewolf Druid"
                skillPix={[
                  { src: require(`../assets/Drod/Fury.png`) },
                  { src: require(`../assets/Drod/Hurricane.png`) },
                  { src: require(`../assets/Drod/Lycanthropy.png`) },
                  { src: require(`../assets/Drod/HeartofWolverine.png`) },
                  { src: require(`../assets/Drod/Werewolf.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="B"
                build="Full Zoo Druid"
                skillPix={[
                  { src: require(`../assets/Drod/Raven.png`) },
                  { src: require(`../assets/Drod/SummonDireWolf.png`) },
                  { src: require(`../assets/Drod/SummonSpiritWolf.png`) },
                  { src: require(`../assets/Drod/SummonGrizzly.png`) },
                  { src: require(`../assets/Drod/HeartofWolverine.png`) },
                  { src: require(`../assets/Drod/CarrionVine.png`) },
                ]}
              />
              <BuildBanner
                tierLetter="B"
                build="WhereBear"
                skillPix={[
                  { src: require(`../assets/Drod/Werebear.png`) },
                  { src: require(`../assets/Drod/Lycanthropy.png`) },
                  { src: require(`../assets/Drod/FireClaws.png`) },
                  { src: require(`../assets/Drod/Firestorm.png`) },
                  { src: require(`../assets/Drod/Rabies.png`) },
                  { src: require(`../assets/Drod/Fury.png`) },
                  { src: require(`../assets/Drod/Hunger.png`) },
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