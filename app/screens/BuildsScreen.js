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
                  { src: require(`../assets/FrozenOrb.png`) },
                  { src: require(`../assets/IceBlast.png`) },
                  { src: require(`../assets/IceBolt.png`) },
                  { src: require(`../assets/ColdMastery.png`) },
                  { src: require(`../assets/Warmth.png`) },
                  { src: require(`../assets/Teleport.png`) },
                  { src: require(`../assets/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Blizzard Build"
                skillPix={[
                  { src: require(`../assets/Blizzard.png`) },
                  { src: require(`../assets/FrostNova.png`) },
                  { src: require(`../assets/IceBlast.png`) },
                  { src: require(`../assets/IceBolt.png`) },
                  { src: require(`../assets/ColdMastery.png`) },
                  { src: require(`../assets/Teleport.png`) },
                  { src: require(`../assets/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Fire MeteOrb"
                skillPix={[
                  { src: require(`../assets/FireBolt.png`) },
                  { src: require(`../assets/FireBall.png`) },
                  { src: require(`../assets/Meteor.png`) },
                  { src: require(`../assets/FireMastery.png`) },
                  { src: require(`../assets/FrozenArmor.png`) },
                  { src: require(`../assets/FrozenOrb.png`) },
                  { src: require(`../assets/ColdMastery.png`) },
                  { src: require(`../assets/Teleport.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Chain Lightning"
                skillPix={[
                  { src: require(`../assets/ChargedBolt.png`) },
                  { src: require(`../assets/Lightning.png`) },
                  { src: require(`../assets/ChainLightning.png`) },
                  { src: require(`../assets/Nova.png`) },
                  { src: require(`../assets/LightningMastery.png`) },
                  { src: require(`../assets/Teleport.png`) },
                  { src: require(`../assets/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="A"
                build="Blizzard MF%"
                skillPix={[
                  { src: require(`../assets/Blizzard.png`) },
                  { src: require(`../assets/FrostNova.png`) },
                  { src: require(`../assets/GlacialSpike.png`) },
                  { src: require(`../assets/IceBlast.png`) },
                  { src: require(`../assets/IceBolt.png`) },
                  { src: require(`../assets/ColdMastery.png`) },
                  { src: require(`../assets/Teleport.png`) },
                  { src: require(`../assets/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="B"
                build="Firewall"
                skillPix={[
                  { src: require(`../assets/Inferno.png`) },
                  { src: require(`../assets/Blaze.png`) },
                  { src: require(`../assets/FireWall.png`) },
                  { src: require(`../assets/FireMastery.png`) },
                  { src: require(`../assets/FrozenOrb.png`) },
                  { src: require(`../assets/Teleport.png`) },
                  { src: require(`../assets/EnergyShield.png`) },
                ]}
              />

              <BuildBanner
                tierLetter="C"
                build="Melee Enchantress"
                skillPix={[
                  { src: require(`../assets/Telekinesis.png`) },
                  { src: require(`../assets/EnergyShield.png`) },
                  { src: require(`../assets/Warmth.png`) },
                  { src: require(`../assets/Enchant.png`) },
                  { src: require(`../assets/Teleport.png`) },
                  { src: require(`../assets/FrozenArmor.png`) },
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
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 80 : 0,
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