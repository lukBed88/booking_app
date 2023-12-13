const allVisitsOnThePatientSide = (patientTab,doctorId) => {
    const patients = Object.values(patientTab)
    .filter(data => data[1]?.patient?.visits)
    .map(data => {
      const patientId = data[0];
      const visits = Object.entries(data[1].patient.visits);

      const filteredVisits = visits
        .filter(([visitId, visitData]) => visitData.visit.doctorId === doctorId)
        .map(([visitId]) => ({
          patientID: patientId,
          visitID: visitId
        }));

      return filteredVisits;
    })
    .filter(patientVisits => patientVisits.length > 0);

  return patients;
}

export default allVisitsOnThePatientSide