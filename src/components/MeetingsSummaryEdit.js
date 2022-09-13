import React, {  useState } from "react";
import { useParams} from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";



export default function MeetingsSummaryEdit() {
    
    const navigate = useNavigate();
    const {tempid} = useParams();
    const [name, setName] = useState("");
    const updateDocument_summary_edit = async () => 
    {
              {
                const ref = doc(db, "summaries", tempid);
                await updateDoc(ref, 
                  {
                    summary: name,
                });
              }
              alert("Summary Edited.");
              navigate("/");
    }
        return(
                <div>
                <div className="form">
                <div className="contact" >
                <textarea
                    type="text"
                    className="contactmessage"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Please Enter Summary.."
                />
                <br></br>
                <button className="Contact__btn" type="submit" onClick={updateDocument_summary_edit}>Edit Summary</button>
                </div>
                </div>
                </div>
            
        );
}


