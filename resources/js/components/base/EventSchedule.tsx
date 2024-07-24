import useMessage from "@/hooks/useMessage";

const divider = " / ";

const EventSchedule = () => {
  const message = useMessage();

  return (
    <div className="flex-column gap-1">
      <div className="flex gap">
        <div className="flex-column">
          <span className="h3">2024</span>
          <strong className="h2">
            <strong>02.12</strong>
          </strong>
        </div>
        <div className="dialog-line ml-4 mr-2 mt-1 mb-2" />
        <div className="flex-column items-end">
          <span className="h3">{message.home.worship.sunday}</span>
          <span className="h2">15:00</span>
        </div>
      </div>
      <span className="large">
        {message.home.worship.sermon}
        {divider}
        {message.home.worship.baptism}
        {divider}
        {message.home.worship.eucharist}
        {divider}
        {message.home.worship.dinner}
      </span>
    </div>
  );
};

export default EventSchedule;
