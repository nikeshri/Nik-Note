import React, { useContext } from "react";
import "./labels.css";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import { AuthContext } from "../../contexts/AuthContext";
import useNotesData from "../../hooks/useNotesData";
import Note from "../../components/Note/note";
import Layout from "../../components/Layout/layout";

const Labels = () => {
  const { pathName } = useContext(AuthContext);
  document.title = `Nik-Note | ${pathName}`;

  const { labeledNotes } = useNotesData();

  return (
    <div className="labels">
      <Navbar />
      <div className="labels-content">
        <Sidebar />
        <div className="labels-main">
          <section>
            <Layout>
              {labeledNotes
                .filter((note) =>
                  note.label.includes(pathName.split("-").join(" "))
                )
                .map((note) => (
                  <Note key={note.id} note={note} />
                ))}
            </Layout>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Labels;
