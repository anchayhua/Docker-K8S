kubectl apply -f dashboard-adminuser.yaml


Para crear el dashboard
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta8/aio/deploy/recommended.yaml
kubectl proxy 
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/


----

kubectl apply -f dashboard-adminuser.yaml
kubectl apply -f .\ClusterRoleBinding.yaml

kubectl -n kubernetes-dashboard create token admin-user
eyJhbGciOiJSUzI1NiIsImtpZCI6Il9ZOXF6VXIxaEtVOHRJajJ4R1dIRzRVTTJ0WW5jalpFVEFMUzVKRHg0YUUifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjoxNzEzOTk4MzgxLCJpYXQiOjE3MTM5OTQ3ODEsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiYzJhY2M4ZTAtNmUwMi00ODgyLWJmODktMTNiODlkZDY0ODM4In19LCJuYmYiOjE3MTM5OTQ3ODEsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.NpTPzhxPRAG8NAenCtnx5fTlY6cpZlsNiGrfJrvPJgeSr4IwBr3RndsTvEXAabCYOLmcI0DTzf_vlgakgxzG34Vm9Q0EHFvgMGBvs5cs-YFORhjE5RE-OKaYwOgAVdxvbUoS6Ry9KNIkyt-Eurb-2WzY5cbgVXKnfV8pFwfm1t4nB6RmahNODsmL0PuCl-n8uE6l5_3ZI0Z8Qod_WyMf5icxO3gfBdxWaB3A8gFTV2H6SkvysFLRgRY7R3fs3zzSZ2M-qBSiifD9mM2PD5mAvx8yQh_TNnR38XdJ5ubiDjJ48G9Fi5zDhTz07Ip3Q0l7HbZ4v5p4XZEufPDUgyEtKw

-- Para reiniciar los pods con la acualizacion de la imagen
kubectl set image deployment/<nombre-del-deployment> <nombre-del-contenedor>=<nueva-imagen>:<tag>