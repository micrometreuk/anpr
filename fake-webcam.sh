info=/tmp/myservice-systemd-cat-pipe-info
mkfifo "$info"
trap "exec 3>&-; rm $info" EXIT
systemd-cat -p info < "$info" &
exec 3>"$info"

DATE=`date '+%Y-%m-%d %H:%M:%S'`
echo "Example service started at ${DATE}" | systemd-cat -p info

while :
do
echo "Looping...";
sleep 30;
done
