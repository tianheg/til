# Boot Slowly

```sh
$ neofetch          
            .-/+oossssoo+/-.               tianheg@tianheg-PC 
        `:+ssssssssssssssssss+:`           ------------------ 
      -+ssssssssssssssssssyyssss+-         OS: Ubuntu 20.04.2 LTS x86_64 
    .ossssssssssssssssssdMMMNysssso.       Host: HP Laptop 14s-cr0xxx 
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: 5.8.0-50-generic 
  +ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: 24 mins 
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Packages: 2072 (dpkg), 9 (snap) 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Shell: zsh 5.8 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Resolution: 1920x1080, 1600x900 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   DE: GNOME 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   WM: Mutter 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   WM Theme: Adwaita 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Theme: Yaru [GTK2/3] 
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    Icons: Yaru [GTK2/3] 
  +sssssssssdmydMMMMMMMMddddyssssssss+     Terminal: gnome-terminal 
   /ssssssssssshdmNNNNmyNMMMMhssssss/      CPU: Intel i5-8250U (8) @ 3.400GHz 
    .ossssssssssssssssssdMMMNysssso.       GPU: Intel UHD Graphics 620 
      -+sssssssssssssssssyyyssss+-         GPU: AMD ATI Radeon R7 M260/M265 / M340/M360 / M440/M445 / 530/535 / 620/625 Mobile 
        `:+ssssssssssssssssss+:`           Memory: 3947MiB / 23809MiB 
            .-/+oossssoo+/-.
```

If you have Intel CPU and are using regular Ubuntu (Gnome) and want a user-friendly way to check CPU speed and adjust it, and even set it to auto-scale based on being plugged vs battery, try [CPU Power Manager](https://extensions.gnome.org/extension/945/cpu-power-manager/).

```sh
$ systemd-analyze                             
Startup finished in 8.653s (firmware) + 4.558s (loader) + 4.153s (kernel) + 1min 14.380s (userspace) = 1min 31.745s 
graphical.target reached after 1min 14.241s in userspace
# from https://youtu.be/_nA6RDvDhRk
$ systemd-analyze blame
34.544s plymouth-quit-wait.service                                                               
21.085s snapd.service                                                                            
19.557s dev-sda1.device                                                                          
17.763s systemd-journal-flush.service                                                            
15.739s networkd-dispatcher.service                                                              
15.690s postgresql@12-main.service                                                               
13.585s vmware-USBArbitrator.service                                                             
11.170s udisks2.service                                                                          
10.335s dev-loop1.device                                                                         
 9.814s accounts-daemon.service                                                                  
 9.103s dev-loop4.device                                                                         
 8.636s NetworkManager-wait-online.service                                                       
 8.601s dev-loop6.device                                                                         
 8.557s dev-loop5.device                                                                         
 8.488s nmbd.service                                                                             
 8.418s dev-loop2.device                                                                         
 7.963s dev-loop7.device                                                                         
 7.787s fwupd.service                                                                            
 7.507s NetworkManager.service                                                                   
 7.471s dev-loop9.device                                                                         
 6.567s dev-loop0.device                                                                         
 6.464s polkit.service                                                                           
 6.461s dev-loop10.device                                                                        
 6.456s dev-loop8.device                                                                         
 5.869s dev-loop3.device                                                                         
 5.777s plymouth-read-write.service                                                              
 5.282s bluetooth.service                                                                        
 5.279s avahi-daemon.service                                                                     
 5.188s bolt.service                                                                             
 4.525s switcheroo-control.service                                                               
 4.519s thermald.service                                                                         
 4.516s wpa_supplicant.service                                                                   
 4.510s systemd-logind.service                                                                   
 4.420s ModemManager.service                                                                     
 4.152s grub-common.service                                                                      
 4.030s apport.service                                                                           
 3.924s smbd.service                                                                             
 3.440s systemd-tmpfiles-setup.service                                                           
 3.433s gpu-manager.service                                                                      
 3.129s systemd-udevd.service                                                                    
 2.845s e2scrub_reap.service                                                                     
 2.663s rsyslog.service                                                                          
 2.643s vmware.service                                                                           
 2.558s secureboot-db.service
 2.448s apparmor.service                                                                         
 2.069s user@125.service                                                                         
 1.247s gdm.service                                                                              
 1.135s systemd-resolved.service                                                                 
 1.061s systemd-modules-load.service                                                             
  972ms binfmt-support.service                                                                   
  953ms snap-core-10958.mount                                                                    
  947ms snap-core18-1988.mount                                                                   
  905ms pppd-dns.service                                                                         
  887ms snap-core18-1997.mount                                                                   
  830ms upower.service                                                                           
  723ms systemd-sysusers.service                                                                 
  708ms virtualbox.service                                                                       
  659ms snap-core20-904.mount                                                                    
  658ms systemd-tmpfiles-setup-dev.service                                                       
  647ms snapd.apparmor.service                                                                   
  642ms keyboard-setup.service                                                                   
  638ms modprobe@drm.service                                                                     
  637ms sysstat.service                                                                          
  634ms phddns_service.service                                                                   
  613ms systemd-random-seed.service                                                              
  585ms openvpn.service                                                                          
  570ms systemd-sysctl.service                                                                   
  567ms vboxweb.service                                                                          
  560ms systemd-fsck@dev-disk-by\x2duuid-fedfa8a8\x2da3de\x2d4d8b\x2db365\x2dbed03a2fe48c.service
  508ms systemd-udev-trigger.service                                                             
  507ms snap-core20-975.mount                                                                    
  505ms systemd-fsck@dev-disk-by\x2duuid-89968979\x2ded13\x2d4744\x2d98fb\x2d2c95f664863c.service
  498ms snap-gnome\x2d3\x2d34\x2d1804-66.mount                                                   
  474ms snap-gtk\x2dcommon\x2dthemes-1514.mount                                                  
  471ms systemd-user-sessions.service                                                            
  427ms snap-snap\x2dstore-518.mount                                                             
  419ms systemd-journald.service                                                                 
  418ms dev-disk-by\x2duuid-8434ab56\x2d381a\x2d4d44\x2d8bb3\x2d6e40ef8b1baa.swap                
  385ms systemd-rfkill.service                                                                   
  356ms console-setup.service                                                                    
  327ms ufw.service                                                                              
  318ms systemd-fsck@dev-disk-by\x2duuid-C7A1\x2dCCDF.service                                    
  317ms snapd.seeded.service                                                                     
  315ms boot-efi.mount                                                                           
  297ms systemd-remount-fs.service                                                               
  278ms plymouth-start.service                                                                   
  259ms systemd-timesyncd.service
  252ms systemd-tmpfiles-clean.service                                                           
  246ms snap-snapd-11588.mount                                                                   
  224ms user@1000.service                                                                        
  220ms snap-snapd-11402.mount                                                                   
  215ms dev-hugepages.mount                                                                      
  215ms kerneloops.service                                                                       
  214ms dev-mqueue.mount                                                                         
  212ms sys-kernel-debug.mount                                                                   
  211ms sys-kernel-tracing.mount                                                                 
  206ms user-runtime-dir@125.service                                                             
  182ms kmod-static-nodes.service                                                                
  181ms systemd-backlight@backlight:intel_backlight.service                                      
  180ms colord.service                                                                           
  176ms apport-autoreport.service                                                                
  134ms setvtrgb.service                                                                         
  133ms home.mount                                                                               
  119ms systemd-update-utmp.service                                                              
   75ms snap-zola-310.mount                                                                      
   48ms rtkit-daemon.service                                                                     
   45ms proc-sys-fs-binfmt_misc.mount                                                            
   22ms boot.mount                                                                               
   13ms alsa-restore.service                                                                     
   12ms grub-initrd-fallback.service                                                             
   12ms user-runtime-dir@1000.service                                                            
    7ms systemd-update-utmp-runlevel.service                                                     
    4ms sys-fs-fuse-connections.mount                                                            
    3ms sys-kernel-config.mount                                                                  
    2ms postgresql.service                                                                       
    1ms docker.socket                                                                            
  816us snapd.socket 
```

**Plymouth is not slowing your boot-up process!** Plymouth is responsible for the boot-up splash screen. Please read [Plymouth](https://wiki.ubuntu.com/Plymouth).

It loads the boot-up logo at the beginning of the boot-up process and then **waits** until the boot-up process has finished so it unloads the splash screen. That is **all** it does and that is why it has to run in parallel and co-exist throughout the **whole** boot-up process. It does not delay anything, it just **waits**.

```sh
$ systemd-analyze plot > SystemdAnalyzePlot.svg
```

You can, however, **reduce your boot-up time** by disabling `NetworkManager-wait-online.service` so **plymouth** has one less process to wait for. This can indeed reduce your boot-up time. To do this please follow the steps in [this answer](https://askubuntu.com/a/1166492/968501).

From <https://askubuntu.com/a/1166492>

If this system is not a server in a network, you can start by cutting down on time used by `NetworkManager-wait-online.service`, to do this please disable the service like so:

```sh
sudo systemctl disable NetworkManager-wait-online.service
```

If it shows up again after reboot, you can follow the above command with this:

```sh
sudo systemctl mask NetworkManager-wait-online.service
```

The purpose of the `NetworkManager-wait-online.service` is to wait for the network to come online before proceeding with the boot process.

This is needed in case of for example servers that rely on network resources as part of the boot process ( eg. mounting remote drives ) or in the case of workstations that rely on the network to boot correctly ( eg. Thin Clients ).

Otherwise, desktop users can disable `NetworkManager-wait-online.service` and network will connect normally after boot has finished minus the unneeded wait time.

It is safe to disable in this case.

Next time:

```sh
$ systemd-analyze
Startup finished in 5.798s (firmware) + 3.640s (loader) + 4.111s (kernel) + 3min 8.299s (userspace) = 3min 21.849s 
graphical.target reached after 1min 28.245s in userspace
```

From <https://itsfoss.com/speed-up-ubuntu-1310/>

1. Reduce the default grub load time
2. Manage startup applications
3. Install preload to speed up application load time
4. Choose the best mirror for software updates
5. Use apt-fast instead of apt-get for a speedy update
6. Remove language related ign from apt-get update
7. Reduce overheating
8. Tweak LibreOffice to make it faster
9. Use a lightweight desktop environment
10. Use lighter alternatives for different applications

---

**References**:

1. <https://askubuntu.com/questions/1230620/ubuntu-20-04-gnome-very-slow>
2. <https://itsfoss.community/t/solved-apps-opening-too-slow-in-ubuntu-20-04/4578/4>
3. <https://askubuntu.com/a/1260993>
4. <https://askubuntu.com/a/1168249>
5. <https://askubuntu.com/a/1166492>
6. <https://youtu.be/vwBoHZuauL8>
7. <https://superuser.com/questions/1599715/getting-a-very-slow-startup-on-ubuntu-20-seems-to-be-stuck-around-the-stage-whe>
8. [10 Killer Tips To Speed Up Ubuntu Linux](https://itsfoss.com/speed-up-ubuntu-1310/)
