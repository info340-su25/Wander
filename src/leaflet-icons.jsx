import L from 'leaflet';
import icon2x from 'leaflet/dist/images/marker-icon-2x.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';
delete L.Icon.Default.prototype._getIconUrl;

// we wanted markers on our map but didn't know how and they weren't showing
// up properly. we consulted AI for a solution to fix this issue.
L.Icon.Default.mergeOptions({
    iconRetinaUrl: icon2x,
    iconUrl: icon,
    shadowUrl: shadow,
});