import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonText,
} from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="home-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="intro-container">
          <IonImg
            src="https://i.pinimg.com/564x/46/49/2a/46492a168fe9950bd4557a35873206e0.jpg"
            className="intro-image"
            alt="Musical Instruments"
          />
          <IonText className="welcome-text">
            Welcome to the best music store
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
