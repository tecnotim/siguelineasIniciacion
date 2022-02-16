DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
basic.pause(1000)
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.GREEN)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.GREEN)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 40)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.GREEN)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
    }
})
