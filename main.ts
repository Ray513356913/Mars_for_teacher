function 左转直到压线 () {
    大左转()
    basic.pause(400)
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1)) {
            停止()
            basic.pause(500)
            break;
        } else {
            左转()
        }
    }
}
function 基础巡线 () {
    PlanetX_Basic.Trackbit_get_state_value()
    if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_0)) {
        左转()
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_0)) {
        右转()
    } else {
        前进()
    }
}
function 大左转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -30)
    neZha.setMotorSpeed(neZha.MotorList.M2, 20)
}
function 右转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 20)
    neZha.setMotorSpeed(neZha.MotorList.M2, -10)
}
function 中间方块 () {
    巡线到全黑停止()
    自动前进(400)
    左转直到压线()
    巡线到全黑停止()
    自动前进(400)
    右转直到压线()
    巡线到全白停止()
    自动前进(300)
    右转直到压线()
    巡线到全黑停止()
    自动前进(400)
    左转直到压线()
    巡线到全白停止()
}
function 左转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -10)
    neZha.setMotorSpeed(neZha.MotorList.M2, 20)
}
function 自动前进 (数字: number) {
    前进()
    basic.pause(数字)
    停止()
    basic.pause(500)
}
function 前松开 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 120)
}
input.onButtonPressed(Button.A, function () {
    存球()
    巡线到全白停止()
    自动前进(400)
    巡线到全白停止()
    自动前进(400)
    右转直到压线()
    巡线到全白停止()
    自动前进(400)
    右转直到压线()
    巡线到全白停止()
    自动前进(800)
})
function 后退 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -20)
    neZha.setMotorSpeed(neZha.MotorList.M2, -20)
}
function 后抬升 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 320)
}
function 大右转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 20)
    neZha.setMotorSpeed(neZha.MotorList.M2, -30)
}
function 前进 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 20)
    neZha.setMotorSpeed(neZha.MotorList.M2, 20)
}
function 存球 () {
    后下降()
    前夹紧()
}
function 颜色 () {
    if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.red)) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, true)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
        basic.pause(1000)
    } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.green)) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
        basic.pause(1000)
    } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.yellow)) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        basic.pause(1000)
    } else {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
    }
}
input.onButtonPressed(Button.B, function () {
	
})
function 吐球 () {
    前松开()
    后抬升()
}
function 巡线到全白停止 () {
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0)) {
            停止()
            basic.pause(500)
            break;
        } else {
            基础巡线()
        }
    }
}
function 右转直到压线 () {
    大右转()
    basic.pause(400)
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1)) {
            停止()
            basic.pause(500)
            break;
        } else {
            右转()
        }
    }
}
function 前夹紧 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 330)
}
function 停止 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
}
function 后下降 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 30)
}
function 巡线到全黑停止 () {
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5)) {
            停止()
            basic.pause(500)
            break;
        } else {
            基础巡线()
        }
    }
}
function 三方块 () {
    巡线到全黑停止()
    自动前进(500)
    左转直到压线()
    巡线到全白停止()
    自动前进(500)
    右转直到压线()
    巡线到全白停止()
    自动前进(500)
    右转直到压线()
    for (let index = 0; index < 3; index++) {
        巡线到全黑停止()
        自动前进(500)
    }
    右转直到压线()
    巡线到全白停止()
    自动前进(500)
    右转直到压线()
    巡线到全黑停止()
    自动前进(500)
    左转直到压线()
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(500)
    }
    左转直到压线()
    巡线到全白停止()
    自动前进(500)
    左转直到压线()
    for (let index = 0; index < 1; index++) {
        巡线到全黑停止()
        自动前进(500)
    }
    右转直到压线()
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(500)
    }
    左转直到压线()
    巡线到全白停止()
    自动前进(500)
    左转直到压线()
    for (let index = 0; index < 1; index++) {
        巡线到全黑停止()
        自动前进(500)
    }
    右转直到压线()
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(500)
    }
    右转直到压线()
    巡线到全白停止()
    自动前进(500)
}
停止()
PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
