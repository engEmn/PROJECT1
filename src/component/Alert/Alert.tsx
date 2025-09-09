import type { ReactNode } from 'react';
import './index.scss'
import { X } from "lucide-react";
import type { AlertType } from '../../types';



interface IProps {
  type: AlertType;
  icon: ReactNode; //jsx code يعني ممكن اكتب فيها
  title: string;
  dscription?: string; //jsx code
  children?: ReactNode;
}

const Alert = ({
  type = "alert-error",
  icon,
  title,
  dscription,
  children,
}: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>

        <X className="close" size={20} />
      </div>

      {children ? children : <p>{dscription}</p>}
    </div>
  );
};

export default Alert;
