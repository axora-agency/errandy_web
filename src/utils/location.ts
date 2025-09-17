const getCurrentPosition = (): Promise<GeolocationPosition> =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(new Error("Geolocation not supported"));
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });

export { getCurrentPosition };
