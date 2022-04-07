const Attending = ({attending,setAttending}) => {

    return(
        <div>
            <h3> Which days will you be attending?</h3>
            <div className="days-attending">
                {attending.map(day => (
                        <div key={day.day}>
                            <label>{day.day}
                                <input
                                    type="checkbox"
                                    checked={day.attending}
                                    onChange={()=>setAttending(
                                        attending.map(d=>d.day===day.day
                                        ?{...d,attending:!d.attending}
                                        :d))}
                                />
                            </label>
                        </div>
                    )
                )}
                <div>
                    <label>All
                     <input type="checkbox"
                      onChange={e=>setAttending(
                          attending.map(d=>e.target.checked
                          ?{...d,attending:true}
                          :{...d,attending:false}))}/>
                    </label>
                </div>
            </div>
        </div>

    )
}

export default Attending;