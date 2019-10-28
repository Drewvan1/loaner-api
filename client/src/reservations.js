export const reservations = [
    // _id will be a string automatically created by mongodb
    // fullName: String,
    // // example: var myDate = new Date("2016-05-18T16:00:00Z");
    // apptTime: Date,
    // reqModel: String,
    // isActive: Boolean
    {_id: '12345', fullName:'john smith', createdBy: 2, apptTime: new Date('2019-10-22T16:00:00'), reqModel: '', isActive: true, created: new Date()},
    {_id: '23456', fullName:'jane doe', createdBy: 59, apptTime: new Date('2019-10-22T17:00:00'), reqModel: 'Odyssey', isActive: false, created: new Date()},
    {_id: '34567', fullName:'drew vdp', createdBy: 14, apptTime: new Date('2019-10-23T09:00:00'), reqModel: 'Pilot', isActive: true, created: new Date()},
    {_id: '45678', fullName:'Nick Cage', createdBy: 14, apptTime: new Date('2019-10-20T11:00:00'), reqModel: 'Accord', isActive: true, created: new Date()},
    {_id: '56789', fullName:'dr. evil', createdBy: 2, apptTime: new Date('2019-10-24T12:45:00'), reqModel: '', isActive: true, created: new Date()},
    {_id: '67890', fullName:'Darwin Washington', createdBy: 74, apptTime: new Date('2019-10-21T07:30:00'), reqModel: 'Odyssey', isActive: true, created: new Date()}
]